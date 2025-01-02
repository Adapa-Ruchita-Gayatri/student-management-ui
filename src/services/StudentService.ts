import { ApiUrlEndPoints } from "../Endpoints/ApiUrlEndpoints";
import { ResponseWrapper, Student, StudentResponse, StudentsFetchRequestPayload } from "../types";
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

    static searchStudents = async(payload: StudentsFetchRequestPayload) => {
      let urlEndPoint = ApiUrlEndPoints.SEARCH_STUDENT_ENDPOINT;
      const resp = await apiRequest<ResponseWrapper<StudentResponse[]>>(urlEndPoint, 'GET', null, payload);
      return resp.data
  }
}
