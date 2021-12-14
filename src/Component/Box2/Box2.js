import React from 'react';
import './Box2.css';
import avatar from '../../images/image-avatar.png';

function Box2() {
    return (
      <div className='box2-content'>
        <img src={avatar} alt='Jules Wyvern' />
        <p className='box2-text'>Creation of </p>
        <a
          href='https://www.frontendmentor.io/profile/RioCantre'
          className='box2-name'
        >
          Jules Wyvern
        </a>
      </div>
    );
}

export default Box2;
