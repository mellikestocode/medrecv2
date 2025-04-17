import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router';

const DashboardWrapper = () => (
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>
)

describe('Dashboard', () => {
    beforeEach(() => {
        render(<DashboardWrapper />);
    })
    describe('Demographic Panel', () => {
        it('should display demographic information', () => {
            expect(screen.getByText('Demographics')).not.toBeUndefined();
            expect(screen.getByText('Name:')).not.toBeUndefined();
            expect(screen.getByText('Date of Birth:')).not.toBeUndefined();
            expect(screen.getByText('Gender:')).not.toBeUndefined();
            expect(screen.getByText('Height:')).not.toBeUndefined();
            expect(screen.getByText('Weight:')).not.toBeUndefined();
        })
    })

    describe('Medical History Panel', () => {
        it('should display medical history information', () => {
            expect(screen.getByText('Medical History')).not.toBeUndefined();
            expect(screen.getByText('Date of Service:')).not.toBeUndefined();
            expect(screen.getByText('Created At:')).not.toBeUndefined();
            expect(screen.getByText('Provider:')).not.toBeUndefined();
            expect(screen.getByText('Notes:')).not.toBeUndefined();
            expect(screen.getByText('Medications:')).not.toBeUndefined();
        })
    })
});
