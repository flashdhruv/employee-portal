import { FunctionComponent } from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import ViewEmployee from "./components/ViewEmployee";

interface ApplicationProps {
    
}
 
const Application: FunctionComponent<ApplicationProps> = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/employee-portal" element={<App/>}/>
                <Route path="/viewEmployee">
                    <Route index element={<ViewEmployee/>}/>
                    <Route path=":id" element={<ViewEmployee/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Application;