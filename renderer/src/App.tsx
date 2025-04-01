import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';

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
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          Features:
        </Typography>
        <Stack>
          
        </Stack>
        <ul>
          <li>View Medical Records</li>
          <li>Add New Records</li>
          <li>Edit Existing Records</li>
          <li>Delete Records</li>
        </ul>
      </Box>
      <Box>
        
      </Box>
    </Container>
  );
};

export default App;

