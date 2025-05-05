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
    const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://api.deezer.com/search?q=${query}&limit=5`);
    const data = await response.json();
    const tracks = data.data;

    for (const track of tracks) {
      const title = track.title;
      const artist = track.artist.name;
      const image = track.album.cover_medium;
      const lyrics = await searchLyrics(title, artist);

      resultsContainer.innerHTML += `
      <div class="song-card">
          <img src="${image}" alt="${title}" width="100%" />
          <h3>${title}</h3>
          <p>${artist}</p>
          <pre style="white-space: pre-wrap; max-height: 200px; overflow-y: auto;">${lyrics}</pre>
      </div>
    `;
    }
  } catch (error) {
    console.error('Deezer Error:', error);
    alert('Something went wrong!');
  }
}

// Genius Lyrics Search
async function searchLyrics(title, artist) {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      const data = await response.json();
      return data.lyrics || 'Lyrics not found.';
    } catch (error) {
      console.error('Lyrics Error:', error);
      return 'Lyrics not available.';
    }
  }
  

// Expose function globally so button can use it
window.getDeezerSongs = getDeezerSongs;
