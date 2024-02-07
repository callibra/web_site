const defaultArtwork = 'default-artwork.jpg';
const defaultSongTitle = 'Unknown Title';

async function fetchCurrentSong() {
  try {
    const response = await fetch('your-backend-endpoint'); // Replace with your actual backend endpoint
    const data = await response.json();

    return {
      artwork: data.artwork || defaultArtwork,
      title: data.title || defaultSongTitle
    };
  } catch (error) {
    console.error('Error fetching current song:', error);
    return {
      artwork: defaultArtwork,
      title: defaultSongTitle
    };
  }
}

async function updatePlayer() {
  try {
    const { artwork, title } = await fetchCurrentSong();
    document.getElementById('artwork').src = artwork;
    document.getElementById('song-title').innerText = title;
  } catch (error) {
    console.error('Error updating player:', error);
  }
}

// Rest of the code...
