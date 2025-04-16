const apiUrl = process.env.REACT_APP_API_URL;

export const fetchToken = async (username: string, password: string): Promise<string> => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.token;
}