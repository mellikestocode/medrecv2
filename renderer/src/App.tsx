import React, { useCallback, useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { fetchToken } from '../../lib/api';
import { useNavigate } from "react-router";

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleLogin = useCallback(async () => {
    try {
      const token = await fetchToken(username, password);
      // set token in local storage or context
      navigate("/dashboard");
    } catch (error: any) {
      const { message } = error;
      setError(message); 
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
          <TextField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} error={error !== null} helperText={error}/>
          <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} error={error !== null}/>
          <Button type="submit" onClick={handleLogin}>Login</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;

