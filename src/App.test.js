import { render, screen } from '@testing-library/react';
import App from './App';
import Box1 from './Component/Box1/Box1';
import Box2 from './Component/Box2/Box2';
import Attribution from './Component/Attribution/Attribution';

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
  const linkComponent2 = screen.getByAltText(/Jules Wyvern/i);
  expect(linkComponent2).toBeInTheDocument();
});

test('renders Attribution coder', () => {
  render(<Attribution />);
  const linkComponent3 = screen.getByText(/Rio Cantre./i);
  expect(linkComponent3).toBeInTheDocument();
});
