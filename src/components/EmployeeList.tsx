import React, { useEffect, useState } from 'react';
import Employee from '../models/Employee';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import "../styling/employeeList.css";


interface  EmployeeListProps {
    items: Employee[]
    onRemoveUser: (id: number) => void
}

function EmployeeList({ items, onRemoveUser} : EmployeeListProps) {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    },[])
    return (
        <React.Fragment>
        <Navbar/>
        <div  className={`fade-in ${fadeIn ? 'visible' : ''}`}>
        <div className='list-of-employees'>
        <ul className='list-group'>
            <h1>Number of Employees in the List: {items.length}</h1>
            {items.map(employee => <li key={employee.id} className='list-group-item left-float'>Name: {employee.name} <br/> Username: {employee.username} <br/>Email:  {employee.email}
            <button onClick={() => onRemoveUser(employee.id)} className='mx-3 right-float delete'>Delete</button>
            <button onClick={() => navigate('/viewEmployee/' + employee.id)} className='mx-3 right-float view'>View Employee</button>
            
            </li>)}
        </ul>
        </div>
        </div>
        
        </React.Fragment>
    );
}

export default EmployeeList;