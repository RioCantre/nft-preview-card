import React from 'react';
import images from './images/image-equilibrium.jpg';
import iconView from './images/icon-view.svg';
import './App.css';
import Box1 from './Component/Box1/Box1';
import Box2 from './Component/Box2/Box2';
import Attribution from './Component/Attribution/Attribution';

function App() {
    return (
      <div className='container'>
        <div className='main'>
          <div className='main-header'>
            <div className='hero-image'>
              <img
                src={images}
                className='main-image'
                alt='nft Equilibrium #3429'
              />
              <div className='image-hover'>
                <img
                  src={iconView}
                  className='icon-view'
                  alt=''
                  aria-hidden='true'
                />
              </div>
            </div>
            <h1>
                <a href='https://fonts.google.com/'>Equilibrium #3429</a>
            </h1>      
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <Box1 />
            <Box2 />
          </div>
        </div>
        <Attribution />
      </div>
    );
}

export default App;
