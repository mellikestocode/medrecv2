import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { fetchToken } from '../../src/api';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const token = await fetchToken(username, password);
    if (token !== null) {
      console.log("Login successful");
      // set token in local storage or context
      // navigate to main page
    } else {
      console.error("Login failed");
      // display error message
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MedRec v2
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={handleLogin}>Login</button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;

