import React from 'react';
import './App.css';

function ArtworkItem({title, description, imageUrl}) {
    return (
        <div className="artwork-item">
            <img src={imageUrl} alt={title} className="artwork-image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ArtworkItem;