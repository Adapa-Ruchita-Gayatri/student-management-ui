export interface Student {
    name: string;
    age: string;
    studentClass: string;
    phoneNumber: number;
}

export interface StudentResponse extends Student {
    id: string
}

export interface StudentsFetchRequestPayload {
    limit: number;
    offset: number;
    name: string;
    isReset?: boolean
}