import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentResponse } from './../../types';

export interface GlobalState {
  studentsData: StudentResponse[],
  studentsDataLoading: boolean,
  allStudentsLoaded: boolean
}

export const sampleStudentsData: StudentResponse[] = [
  {
    id: "1",
    name: "John Doe",
    age: "16",
    phoneNumber: 1234567890,
    studentClass: "10th Grade"
  },
  {
    id: "2",
    name: "Jane Smith",
    age: "15",
    phoneNumber: 9876543210,
    studentClass: "9th Grade"
  },
  {
    id: "3",
    name: "Emily Johnson",
    age: "17",
    phoneNumber: 4567892123,
    studentClass: "11th Grade"
  },
  {
    id: "4",
    name: "Michael Brown",
    age: "18",
    phoneNumber: 3216549870,
    studentClass: "12th Grade"
  },
  {
    id: "5",
    name: "Sarah Davis",
    age: "16",
    phoneNumber: 6543219789,
    studentClass: "10th Grade"
  }
];


const initialState: GlobalState = {
    studentsData: [],
    studentsDataLoading: false,
    allStudentsLoaded: false
};

const globalSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setStudentsData: (state, action: PayloadAction<StudentResponse[]>) => {
      console.log("Setting state")
      state.studentsData = action.payload;
    },
    setStudentsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.studentsDataLoading = action.payload;
    },
    setAllStudentsLoaded: (state, action: PayloadAction<boolean>) => {
      state.allStudentsLoaded = action.payload
    },
    resetStudentsState: (state) => {
      state.studentsData = []
      state.studentsDataLoading = false;
      state.allStudentsLoaded = false;
    }
  },
});

export const { setStudentsData, setStudentsDataLoading, setAllStudentsLoaded, resetStudentsState } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
