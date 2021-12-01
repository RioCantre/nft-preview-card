import React from 'react';
import './Box1.css';
import icon1 from '../../images/icon-ethereum.svg';
import icon2 from '../../images/icon-clock.svg';


function Box1() {
    return (
        <div className="box1-content">
            <div className="icon1-content">
                <img src={icon1} alt="icon1" />
                <p className="icon1-value">0.041 ETH</p>
            </div>
            <div className="icon2-content">
                <img src={icon2} alt="icon2" />
                <p>3 days left</p>
            </div>
        </div>
    );
}

export default Box1;
