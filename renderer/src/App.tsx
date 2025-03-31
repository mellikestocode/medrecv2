import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MedRec v2
        </Typography>
        <Typography variant="body1">
          Welcome to the Medical Records Application
        </Typography>
      </Box>
    </Container>
  );
};

export default App;

