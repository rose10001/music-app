import React, { useState } from 'react';
import NowPlaying from './components/NowPlaying';
import SongList from './components/SongList';
import './App.css';

const songs = [
  {
    name: "My Stress",
    singer: "NF Real Music",
    path: "/assets/music/song1.mp3",
    image: "/assets/img/xie1.jpg",
    duration: "3:22",
  },
  // Add other songs...
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleSelectSong = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <div className="app">
      <div className="song-list">
        <h2>Most Popular</h2>
        <SongList songs={songs} onSelect={handleSelectSong} />
      </div>
      <div className="now-playing-section">
        <h2>Now Playing</h2>
        <NowPlaying song={songs[currentSongIndex]} />
      </div>
    </div>
  );
}

export default App;
