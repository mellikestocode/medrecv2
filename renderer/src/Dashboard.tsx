import react, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchPatient } from '../../lib/api';
import { Patient } from './types';

const Dashboard = () => {
    const [patient, setPatient] = useState<Patient | null>(null);
    useEffect(() => {
        fetchPatient().then((data) => {
            setPatient(data);
        }).catch((error) => {
            console.error('Error fetching patient data:', error);
        });
    }, []);

    return (
        <Container>
            <NavLink to="/">Sign Out</NavLink>
            <br />
            <Box>
                <Typography variant="h1" component="h2">Demographics</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Field</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>John Doe</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>01/01/1990</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Gender</TableCell>
                                <TableCell>Male</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell>180 cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Weight</TableCell>
                                <TableCell>75 kg</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box>
                <Typography variant="h1" component="h2">Medical History</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Field</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Date of Service</TableCell>
                                <TableCell>01/01/2023</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Created At</TableCell>
                                <TableCell>01/02/2023</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Provider</TableCell>
                                <TableCell>Dr. Smith</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Notes</TableCell>
                                <TableCell>Routine check-up</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Medications</TableCell>
                                <TableCell>None</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default Dashboard;