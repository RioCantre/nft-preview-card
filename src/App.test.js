import { render, screen } from '@testing-library/react';
import App from './App';
import Box1 from './Component/Box1/Box1';
import Box2 from './Component/Box2/Box2';

test('renders Item name link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Equilibrium #3429/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Box1 value', () => {
    render(<Box1 />);
    const linkComponent = screen.getByText(/0.041 ETH/i);
    expect(linkComponent).toBeInTheDocument();
});

test('renders Box1 value', () => {
    render(<Box1 />);
    const linkComponent = screen.getByText(/3 days left/i);
    expect(linkComponent).toBeInTheDocument();
});

test('renders Box2 avatar', () => {
    render(<Box2 />);
    const linkComponent2 = screen.getByAltText(/avatar/i);
    expect(linkComponent2).toBeInTheDocument();
});




