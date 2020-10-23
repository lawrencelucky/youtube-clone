import React from 'react';

import './VideoRow.css';

function VideoRow({
  views,
  sub,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} &bull;{' '}
          <span className='videoRow__subs'>
            <span className='videoRow__subsNumber'>{sub}</span> Subscribers
          </span>{' '}
          {views} &bull; {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
