import { StudentService } from "../services/StudentService";
import { AppDispatch, setAllStudentsLoaded, setStudentsData, setStudentsDataLoading, resetStudentsState } from "../store";
import { StudentResponse, StudentsFetchRequestPayload } from "../types";

export class SearchActions {
    static resetStudentsData = () => async (dispatch: AppDispatch) => {
        await dispatch(resetStudentsState());
    }

    static getAndSetStudentsData = (payload: StudentsFetchRequestPayload) => async (dispatch: AppDispatch, getState: any) => {
        let respPayload = {
            limit: payload.limit,
            offset: payload.offset,
            name: payload.name,
        }
        if(payload.isReset) {
            dispatch(setAllStudentsLoaded(true));
        }
        const students: StudentResponse[] =  await StudentService.searchStudents(respPayload);
        setStudentsDataLoading(true);

        const existingStudents = payload.isReset ? [] : getState().globalData.studentsData;
        const allStudents = [...existingStudents, ...students];
        if(students.length == 0) {
            dispatch(setAllStudentsLoaded(true));
            dispatch(setStudentsData(existingStudents))
            return;
        }
        dispatch(setStudentsData(allStudents));
        dispatch(setStudentsDataLoading(false));
    }

    static deletStudent = (id: string) => async (dispatch: any, getState: any) => {
        return await StudentService.deleteStudent(id)
    }

    
}