import react, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchPatient } from '../../lib/api';
import { MedicalHistory, Patient } from './types';

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
                                <TableCell>{patient?.name || 'Loading...'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>{patient?.dob || 'Loading...'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Gender</TableCell>
                                <TableCell>{patient?.gender || 'Loading...'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell>{patient?.height || 'Loading...'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Weight</TableCell>
                                <TableCell>{patient?.weight || 'Loading...'}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box>
                <Typography variant="h1" component="h2">Medical History</Typography>
                <MedicalHistoryTable medicalHistory={patient?.medicalHistory || []} />
            </Box>
        </Container>
    );
}

const MedicalHistoryTable = ({ medicalHistory }: { medicalHistory: MedicalHistory[] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date of Service</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Provider</TableCell>
                        <TableCell>Notes</TableCell>
                        <TableCell>Medications</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {medicalHistory.map((history, index) => (
                        <TableRow key={index}>
                            <TableCell>{history.dateOfService}</TableCell>
                            <TableCell>{history.createdAt}</TableCell>
                            <TableCell>{history.provider}</TableCell>
                            <TableCell>{history.notes}</TableCell>
                            <TableCell>{history.medications.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Dashboard;