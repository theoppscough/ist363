const geniusAccessToken = 'A2QMDTC80nZDL6_nsOVG2rTw5WrnDVu9kCcAy4Wuswh8FN7KpQn_rIH3l8T3wg4m';

// Get songs from Deezer
async function getDeezerSongs() {
  const query = document.getElementById('genreInput').value.trim();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!query) {
    alert('Please enter a genre or keyword!');
    return;
  }

  try {
    const response = await fetch(`https://corsproxy.io/?https://api.deezer.com/search?q=${query}&limit=5`);
    const data = await response.json();
    const tracks = data.data;

    for (const track of tracks) {
      const title = track.title;
      const artist = track.artist.name;
      const image = track.album.cover_medium;
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
    console.error('Deezer Error:', error);
    alert('Something went wrong!');
  }
}

// Genius Lyrics Search
async function searchGenius(title, artist) {
  const query = encodeURIComponent(`${title} ${artist}`);
  const response = await fetch(`https://corsproxy.io/?https://api.genius.com/search?q=${query}`, {
    headers: { Authorization: `Bearer ${geniusAccessToken}` }
  });

  const data = await response.json();
  if (data.response.hits.length > 0) {
    return data.response.hits[0].result.url;
  } else {
    return '#';
  }
}

// Expose function globally so button can use it
window.getDeezerSongs = getDeezerSongs;
