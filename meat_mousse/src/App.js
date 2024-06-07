import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import artworkData from './artworkData';
import ArtworkItem from './ArtworkItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Meat_Mousse!</h1>
      </header>
      <div className="artwork-gallery">
        {artworkData.mao((artwork, index) => (
          <ArtworkItem
          key={index}
          title={artwork.title}
          description={artwork.descrption}
          imageUrl={artwork.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
