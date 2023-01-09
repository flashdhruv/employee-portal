import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeBackend from "../services/employeeBackend";
import Employee from '../models/Employee';
interface ViewEmployeeProps {
    
}
 
const ViewEmployee: FunctionComponent<ViewEmployeeProps> = () => {

    const [details, setDetails] = useState<Employee> ();
    const { id } = useParams();

    const getDetails = async (id: number) => {
        const user = await employeeBackend.getUser(id);
        setDetails(user);
      }

    useEffect(() => {
        let ID = Number(id);
        getDetails(ID);
    }, [])


    return ( 
    <div>
        <h1>Here lies the Employee Information</h1>
        <p>{details?.id}</p>
        <p>{details?.email}</p>
        <p>{details?.username}</p>
        <p>{details?.name}</p>
    </div> 
    );
}
 
export default ViewEmployee;