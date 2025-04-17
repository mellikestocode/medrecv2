import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';

const AppWrapper = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

describe('App Component', () => {
    beforeEach(() => {
        render(<AppWrapper />);
    })
    it('renders the main heading', () => {
        expect(screen.getByText('MedRec v2')).not.toBeUndefined();
    });
    it('renders the login form', () => {
        expect(screen.getByPlaceholderText('Username')).not.toBeUndefined();
        expect(screen.getByPlaceholderText('Password')).not.toBeUndefined();
        expect(screen.getByRole('button', { name: /login/i })).not.toBeUndefined();
    });
});
