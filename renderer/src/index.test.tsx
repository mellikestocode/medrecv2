import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import Dashboard from './Dashboard';


const AppTestingWrapper = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
)

describe('App Integration Tests', () => {
    it('should render the App component and navigate to Dashboard on successful login', async () => {
        // Mock the fetchToken function to return a resolved promise
        jest.mock('../../lib/api', () => ({
            fetchToken: jest.fn(() => Promise.resolve('mocked_token')),
        }));

        // Render the App component
        const { getByPlaceholderText, getByRole } = render(<AppTestingWrapper />);

        // Simulate user input
        await userEvent.type(getByPlaceholderText('Username'), 'testuser');
        await userEvent.type(getByPlaceholderText('Password'), 'testpassword');

        // Simulate form submission
        await userEvent.click(getByRole('button', { name: /login/i }));

        // Assert that the Dashboard component is rendered
        expect(location.pathname).toBe('/dashboard');
    })
})