import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText('MedRec v2')).not.toBeUndefined();
  });

  it('renders the welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Medical Records Application')).not.toBeUndefined();
  });

  it('renders the features heading', () => {
    render(<App />);
    expect(screen.getByText('Features:')).not.toBeUndefined();
  });

  it('renders the feature list', () => {
    render(<App />);
    expect(screen.getByText('View Medical Records')).not.toBeUndefined();
    expect(screen.getByText('Add New Records')).not.toBeUndefined();
    expect(screen.getByText('Edit Existing Records')).not.toBeUndefined();
    expect(screen.getByText('Delete Records')).not.toBeUndefined();
  });
});
