import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentResponse } from './../../types';

export interface GlobalState {
  studentsData: StudentResponse[]
}

const initialState: GlobalState = {
    studentsData: []
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
