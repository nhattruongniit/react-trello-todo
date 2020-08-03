import React from 'react';

// style
import './avatar.style.scss';

function Avatar({ src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt="Avatar"
    />
  )
}

export default Avatar;
