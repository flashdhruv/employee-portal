import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styling/Navbar.css";
const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <nav>
            <ul>
                <li><a onClick={() => navigate('/employee-portal')}>Home</a></li>
                <li><a onClick={() => navigate('/listOfEmployees')} >View Employees</a></li>
                {/* <li><a  onClick={() => navigate('/AddEmployee')} >Add Employees</a></li> */}
            </ul>
        </nav>
     );
}
 
export default Navbar;