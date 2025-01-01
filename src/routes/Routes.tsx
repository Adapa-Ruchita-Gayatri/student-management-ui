import {
    Route,
    createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import App from "../App";
import {CreateStudentView} from "../views";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/create" element={<CreateStudentView/>}/>
        </Route>
    )
);

