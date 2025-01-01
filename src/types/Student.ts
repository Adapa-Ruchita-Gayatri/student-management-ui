export interface Student {
    name: string;
    age: string;
    phoneNumber: string;
    studentClass: string
}

export interface StudentResponse extends Student {
    id: string
}