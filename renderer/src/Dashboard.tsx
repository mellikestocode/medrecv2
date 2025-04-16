import react from 'react';
import { NavLink } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>An empty dashboard page</p>
            <NavLink to="/">Back to Login</NavLink>
        </div>
    );
}

export default Dashboard;