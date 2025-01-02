import React, { useEffect } from "react";
import "./GridComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store";
import { StudentResponse } from "../../../types";
import { SearchActions } from "../../../actions";
import { InfiniteScrollComponent } from "../../common";
import { useNavigate } from "react-router-dom";
import { SearchComponent } from "../SearchComponent";

export interface GridComponentProps {

}

export const GridComponent = (props: GridComponentProps) => {
    const [gridLoad, setGridLoad] = React.useState(false);
    const studentsData = useSelector<AppState, StudentResponse[]>((state) => state.globalData.studentsData);
    const allStudentsLoaded = useSelector<AppState, boolean>((state) => state.globalData.allStudentsLoaded);
    const studentsDataLoading = useSelector<AppState, boolean>((state) => state.globalData.studentsDataLoading);
    const [searchString, setSearchString] = React.useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setGridLoad(true)
            await fetchStudentsData();
            setGridLoad(false)
        }
        fetchData();
        return () => {
            dispatch(SearchActions.resetStudentsData());
        }
    }, []);

    const fetchStudentsData = async () => {
        await dispatch(SearchActions.getAndSetStudentsData({
            limit: 20,
            offset: studentsData.length,
            name: searchString.trim(),
            isReset: false
        }));
    }

    const fetchSearchBasedStudentsData = async (searchString = "") => {
        setSearchString(searchString.trim())
        await dispatch(SearchActions.getAndSetStudentsData({
            limit: 20,
            offset: 0,
            name: searchString,
            isReset: true
        }));
    }

    const handleEdit = (student: StudentResponse) => {
        navigate(`/create`, { state: student });
    };

    const getTableView = (studentsData: StudentResponse[]) => {
        if (studentsData.length === 0) {
            return <p className="mt-4">No students found</p>;
        }

        return (
            <table className="students-table">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Class</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((student) => (
                        <tr key={student.id}>
                            {/* <td>{student.id}</td> */}
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.studentClass}</td>
                            <td><div className="dropdown">
                                <button
                                    className="dropdown-toggle"
                                    type="button"
                                    id="kebabMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    ...
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="kebabMenuButton">
                                    <li><span className="dropdown-item" onClick={() => handleEdit(student)}>Edit</span></li>
                                    <li>
                                        <span
                                            className="dropdown-item"
                                            onClick={async () => {
                                                await dispatch(SearchActions.deletStudent(student.id));
                                                await fetchSearchBasedStudentsData();
                                            }}
                                        >
                                            Delete
                                        </span>
                                    </li>
                                </ul>
                            </div></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    

    return (
        <div className="grid-view-wrapper">
            <div className="d-flex align-items-center justify-content-between w-100">
                <b className="font-size-20">Student Data</b>
                <SearchComponent fetchSearchResults={(searchString) => fetchSearchBasedStudentsData(searchString)} />
            </div>
            <InfiniteScrollComponent
                isBottomEndOfResultsReached={allStudentsLoaded}
                wrapperClassName={"students-search-grid mt-5"}
                getMoreItems={async () => {
                    await fetchStudentsData();
                }}
                getComponentToRender={() => {
                    return gridLoad ? <span className="loading-view">Loading...</span> : getTableView(studentsData);
                }}

            />

        </div>
    )
}