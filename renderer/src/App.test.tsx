import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText('MedRec v2')).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Medical Records Application')).toBeInTheDocument();
  });

  it('renders the features heading', () => {
    render(<App />);
    expect(screen.getByText('Features:')).toBeInTheDocument();
  });

  it('renders the feature list', () => {
    render(<App />);
    expect(screen.getByText('View Medical Records')).toBeInTheDocument();
    expect(screen.getByText('Add New Records')).toBeInTheDocument();
    expect(screen.getByText('Edit Existing Records')).toBeInTheDocument();
    expect(screen.getByText('Delete Records')).toBeInTheDocument();
  });
});
