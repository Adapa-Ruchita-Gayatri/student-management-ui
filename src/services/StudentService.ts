import { ApiUrlEndPoints } from "../Endpoints/ApiUrlEndpoints";
import { Student, StudentResponse } from "../types";
import { apiRequest, replacePathVariables } from "../utils";

export class StudentService {
    static createStudent = async(payload: Student) => {
        let urlEndPoint = ApiUrlEndPoints.CREATE_STUDENT_ENDPOINT
        return await apiRequest(urlEndPoint, 'POST', payload)
    }

    static deleteStudent = async (id: string) => {
        const url = replacePathVariables(
          ApiUrlEndPoints.DELETE_UPDATE_STUDENT_ENDPOINT,
          [id]
        );
        const response = await apiRequest<boolean>(url, "delete");
        return response;
      }

    static updateStudent = async (payload: Student, id: string) => {
      const url = replacePathVariables(
        ApiUrlEndPoints.DELETE_UPDATE_STUDENT_ENDPOINT,
        [id]
      );
      return await apiRequest<StudentResponse>(url, "put", payload);
    }
}
