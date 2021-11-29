import images from './images/image-equilibrium.jpg';
import './App.css';

function App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <img src={images} alt='img' />
          </div>
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </header>
      </div>
    );
}

export default App;
