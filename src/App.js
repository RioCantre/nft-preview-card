import React from 'react';
import images from './images/image-equilibrium.jpg';
import './App.css';
import Box1 from './Component/Box1/Box1';
import Box2 from './Component/Box2/Box2';

function App() {
    return (
      <div className='App'>
        <header className='App-header'>
            <div>
                <img src={images} alt='img' />
            </div>
            <a href='https://fonts.google.com/'>Equilibrium #3429</a>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <Box1 />
            <Box2 />
        </header>
      </div>
    );
}

export default App;
