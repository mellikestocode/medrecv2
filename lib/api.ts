import { Gender, Patient } from "../renderer/src/types";

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
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data.token;
}

export const fetchPatient = async (): Promise<Patient> => {
    // const token = await localStorage.getItem('token');
    // if (!token) {
    //     throw new Error('No token found');
    // }
    // const response = await fetch(`${apiUrl}/patient`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //     }
    // }
    // );
    // if (!response.ok) {
    //     throw new Error(response.statusText);
    // }
    // const data = await response.json();
    // return data;
    return {
        name: 'John Doe',
        dob: '01/01/1990',
        gender: Gender.Male,
        height: 180,
        weight: 75,
        medicalHistory: [
            {
                dateOfService: '01/01/2023',
                createdAt: '01/02/2023',
                provider: 'Dr. Smith',
                notes: 'Follow-up appointment',
                medications: ['Medication 1', 'Medication 2'],
            },
        ],
    }
}