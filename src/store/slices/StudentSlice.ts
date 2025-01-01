import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentResponse } from './../../types';

export interface GlobalState {
  studentsData: StudentResponse[]
}

export const sampleStudentsData: StudentResponse[] = [
  {
    id: "1",
    name: "John Doe",
    age: "16",
    phoneNumber: "123-456-7890",
    studentClass: "10th Grade"
  },
  {
    id: "2",
    name: "Jane Smith",
    age: "15",
    phoneNumber: "987-654-3210",
    studentClass: "9th Grade"
  },
  {
    id: "3",
    name: "Emily Johnson",
    age: "17",
    phoneNumber: "456-789-0123",
    studentClass: "11th Grade"
  },
  {
    id: "4",
    name: "Michael Brown",
    age: "18",
    phoneNumber: "321-654-9870",
    studentClass: "12th Grade"
  },
  {
    id: "5",
    name: "Sarah Davis",
    age: "16",
    phoneNumber: "654-321-0987",
    studentClass: "10th Grade"
  }
];


const initialState: GlobalState = {
    studentsData: sampleStudentsData
};

const globalSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setStudentsData: (state, action: PayloadAction<StudentResponse[]>) => {
      state.studentsData = action.payload;
    },
  },
});

export const { setStudentsData } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
