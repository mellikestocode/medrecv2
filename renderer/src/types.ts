export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export interface MedicalHistory {
    dateOfService: string;
    createdAt: string;
    provider: string;
    notes: string;
    medications: string[];
}

export interface Patient {
    name: string;
    dob: string;
    gender: Gender;
    height: number;
    weight: number;
    medicalHistory: MedicalHistory[];
}