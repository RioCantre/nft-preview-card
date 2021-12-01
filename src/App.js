import React from 'react';
import images from './images/image-equilibrium.jpg';
import iconView from './images/icon-view.svg';
import './App.css';
import Box1 from './Component/Box1/Box1';
import Box2 from './Component/Box2/Box2';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div className="hero-image">
                    <img src={images}  className= "main-image" alt='img' />
                    <div className="image-hover">
                        <img src={iconView} className="icon-view" alt="icon view"/>
                    </div>
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
