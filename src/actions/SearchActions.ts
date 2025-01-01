import { AppDispatch, setAllStudentsLoaded, setStudentsData, setStudentsDataLoading, resetStudentsState } from "../store";
import { StudentsFetchRequestPayload } from "../types";

export class SearchActions {


    static formMessages = (from: number, to: number) => {
        if(from>=40) {
            return [];
        }
        if(to<=0) {
            return [];
        }
        const messages = [];
        for (let i = from; i <= to; i++) {
            const item = {
                id: i,
                name: i + "John Doe",
                age: "16",
                phoneNumber: "123-456-7890",
                studentClass: "10th Grade"
              };

            messages.push(item);
            
        }
        return messages;

    }

    static resetStudentsData = () => async (dispatch: AppDispatch) => {
        await dispatch(resetStudentsState());
    }

    static getAndSetStudentsData = (payload: StudentsFetchRequestPayload) => async (dispatch: AppDispatch, getState: any) => {

        const students = this.formMessages(payload.offset, payload.offset + payload.limit);
        
        setStudentsDataLoading(true);

        return new Promise((res, rej) => {
            setTimeout(() => {
                const existingStudents = getState().globalData.studentsData;
                const allStudents = [...existingStudents, students];
                if(students.length == 0) {
                    setAllStudentsLoaded(true);
                    res(true);
                    return;
                }
                setStudentsData(allStudents);
                setStudentsDataLoading(false);
                
                res(true);
            },4000);
        })

       

    }

    
}