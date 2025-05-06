import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let accessToken = null;
let tokenExpiration = 0;

async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiration) return accessToken;

  const creds = Buffer.from(`${process.env.FATSECRET_CLIENT_ID}:${process.env.FATSECRET_CLIENT_SECRET}`).toString('base64');

  const res = await axios.post('https://oauth.fatsecret.com/connect/token',
    new URLSearchParams({ grant_type: 'client_credentials' }), {
    headers: {
      Authorization: `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  accessToken = res.data.access_token;
  tokenExpiration = Date.now() + res.data.expires_in * 1000;
  return accessToken;
}

app.get('/search', async (req, res) => {
  try {
    const token = await getAccessToken();
    const { query } = req.query;

    const response = await axios.get('https://platform.fatsecret.com/rest/server.api', {
      params: {
        method: 'foods.search',
        search_expression: query,
        format: 'json'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error accessing FatSecret API');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
