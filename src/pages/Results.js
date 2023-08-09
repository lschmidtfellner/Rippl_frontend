import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

function Results({ recommendations, setRecommendations }) {
  return (
    <>
      <h1>HERE YOU GO!</h1>
      {recommendations.map(item => (
        <div className='preview-container' key={item.spotify_id}>
          <p className='song-info'>
            <span className='song-name'>{item.title}</span> by <span className='song-artist'>{item.artist}</span>
          </p>
          {item.previewURL ? (
            <AudioPlayer src={item.previewURL} />
          ) : (
            <div className='preview-container'>
              <p>Preview unavailable</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Results;
