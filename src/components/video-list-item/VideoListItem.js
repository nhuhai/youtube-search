import React from 'react';
import './video-list-item.css';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="video-list-item">
      <div className="media-left">
        <img className="media-object" src={imageUrl} alt="video thumbnail"/>
      </div>

      <div className="media-body">
        <div className="meadia-heading">{title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
