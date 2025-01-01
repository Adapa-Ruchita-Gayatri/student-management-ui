import React, { useEffect } from "react";
import "./GridComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store";
import { StudentResponse } from "../../../types";
import { SearchActions } from "../../../actions";
import { InfiniteScrollComponent } from "../../common";

export interface GridComponentProps {

}

export const GridComponent = (props: GridComponentProps) => {

    const studentsData = useSelector<AppState,StudentResponse[]>((state)=> state.globalData.studentsData);
    const allStudentsLoaded = useSelector<AppState, boolean>((state) => state.globalData.allStudentsLoaded);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetchStudentsData();

        return () => {
            dispatch(SearchActions.resetStudentsData());
        }
    },[]);

    const fetchStudentsData = async () => {
        await dispatch(SearchActions.getAndSetStudentsData({
            limit: 20,
            offset: studentsData.length
        }))
    }

    const getTableView = (studentsData: StudentResponse[]) => {
        if (studentsData.length === 0) {
            return <p>No students found</p>;
        }

        return (
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.studentClass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="grid-view-wrapper">
            <h1>Student Data</h1>
            <InfiniteScrollComponent
                isBottomEndOfResultsReached={allStudentsLoaded}
                wrapperClassName={""}
                getMoreItems={async () => {
                    await fetchStudentsData();
                }}
                getComponentToRender={() => {
                    return getTableView(studentsData);
                }}

            />
            
        </div>
    )
}