import { FunctionComponent } from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import AddEmployee from "./components/AddEmployee";
import HomePage from "./components/HomePage";
import ViewEmployee from "./components/ViewEmployee";

interface ApplicationProps {
    
}
 
const Application: FunctionComponent<ApplicationProps> = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/employee-portal" element={<HomePage/>}/>
                <Route path="/AddEmployee" element={<AddEmployee/>}/>
                <Route path="/listOfEmployees" element={<App/>}/>
                <Route path="/viewEmployee">
                    <Route index element={<ViewEmployee/>}/>
                    <Route path=":id" element={<ViewEmployee/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Application;