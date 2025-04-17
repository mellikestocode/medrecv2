import react from 'react';
import { NavLink } from 'react-router';
import { Box, Container, Typography } from '@mui/material';

const Dashboard = () => {
    return (
        <Container>
            <NavLink to="/">Sign Out</NavLink>
            <br />
            <Box>
                <Typography variant="h1" component="h2">Demographics</Typography>
                <Typography variant="body1">Name:</Typography>
                <Typography variant="body1">Date of Birth:</Typography>
                <Typography variant="body1">Gender:</Typography>
                <Typography variant="body1">Height:</Typography>
                <Typography variant="body1">Weight:</Typography>
            </Box>
            <Box>
                <Typography variant="h1" component="h2">Medical History</Typography>
                <Typography variant="body1">Date of Service:</Typography>
                <Typography variant="body1">Created At:</Typography>
                <Typography variant="body1">Provider:</Typography>
                <Typography variant="body1">Notes:</Typography>
                <Typography variant="body1">Medications:</Typography>
            </Box>
        </Container>
    );
}

export default Dashboard;