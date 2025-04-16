import React, { useCallback, useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { fetchToken } from '../../lib/api';
import { useNavigate } from "react-router";

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = useCallback(async () => {
    try {
      const token = await fetchToken(username, password);
      // set token in local storage or context
      navigate("/dashboard");
    } catch (error) { 
      console.error("Login failed, fetch no bueno", error);
      // display error message
    }
  }, [username, password]);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MedRec v2
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit" onClick={handleLogin}>Login</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;

