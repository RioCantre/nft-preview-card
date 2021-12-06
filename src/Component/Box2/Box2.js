import React from 'react';
import './Box2.css';
import avatar from '../../images/image-avatar.png';

function Box2() {
    return (
        <div className='box2-content'>
            <img src={avatar} alt='avatar' />
            <p className="box2-text">Creation of </p>
            <p className="box2-name">Jules Wyvern</p>
        </div>
    );
}

export default Box2;
