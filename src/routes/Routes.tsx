import {
    Route,
    createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import App from "../App";
import {CreateStudentView, SearchStudentsView} from "../views";
import React from "react";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/create" element={<CreateStudentView/>}/>
            <Route path="/search" element={<SearchStudentsView/>}/>
        </Route>
    )
);

