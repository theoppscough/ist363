const spotifyClientId = 'c5baaed4ac174ccf99460db9dc24b597';
const spotifyClientSecret = '69f256225b804b1ba67c010fbf68103f';
const geniusAccessToken = 'A2QMDTC80nZDL6_nsOVG2rTw5WrnDVu9kCcAy4Wuswh8FN7KpQn_rIH3l8T3wg4m';

// Get Spotify Token
async function getSpotifyToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${spotifyClientId}:${spotifyClientSecret}`)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  return data.access_token;
}

// Get Recommendations
async function getRecommendations() {
  const genre = document.getElementById('genreInput').value.trim();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!genre) {
    alert('Please enter a genre!');
    return;
  }

  try {
    const token = await getSpotifyToken();

    const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${genre}&limit=5`, {
      headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await response.json();
    const tracks = data.tracks;

    for (const track of tracks) {
      const title = track.name;
      const artist = track.artists[0].name;
      const image = track.album.images[1].url;

      const geniusLink = await searchGenius(title, artist);

      resultsContainer.innerHTML += `
        <div class="song-card">
          <img src="${image}" alt="${title}" width="100%" />
          <h3>${title}</h3>
          <p>${artist}</p>
          <a href="${geniusLink}" target="_blank">View Lyrics</a>
        </div>
      `;
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong!');
  }
}

// Genius Lyrics Search
async function searchGenius(title, artist) {
  const query = encodeURIComponent(`${title} ${artist}`);
  const response = await fetch(`https://api.genius.com/search?q=${query}`, {
    headers: { Authorization: `Bearer ${geniusAccessToken}` }
  });

  const data = await response.json();
  if (data.response.hits.length > 0) {
    return data.response.hits[0].result.url;
  } else {
    return '#';
  }
}
