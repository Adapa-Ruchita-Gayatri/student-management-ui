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
        const students: StudentResponse[] =  await StudentService.searchStudents(respPayload);
        setStudentsDataLoading(true);

        return new Promise((res, rej) => {
            setTimeout(async () => {
                const existingStudents = payload.isReset ? [] : getState().globalData.studentsData;
                const allStudents = [...existingStudents, ...students];
                if(students.length == 0) {
                    dispatch(setAllStudentsLoaded(true));
                    res(true);
                    return;
                }
                dispatch(setStudentsData(allStudents));
                dispatch(setStudentsDataLoading(false));
                res(true);
            },500);
        })
    }

    static deletStudent = (id: string) => async (dispatch: any, getState: any) => {
        await StudentService.deleteStudent(id)
    }

    
}