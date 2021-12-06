import React from 'react';
import './Attribution.css';


function Attribution() {
    return (
      <div className='attribution'>
        Challenge by
        <a
          className='link'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener noreferrer'
        >
          Frontend Mentor
        </a>
         .Coded by
        <a
          href='https://www.frontendmentor.io/profile/RioCantre'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          Rio Cantre
        </a>
        .
      </div>
    );
}

export default Attribution;
