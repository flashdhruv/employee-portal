import React from 'react';
import Employee from '../models/Employee';
import {useNavigate} from 'react-router-dom';



interface  EmployeeListProps {
    items: Employee[]
    onRemoveUser: (id: number) => void
}

function EmployeeList({ items, onRemoveUser} : EmployeeListProps) {
    const navigate = useNavigate();
    return (
        <ul className='list-group'>
            <h1>Number of Employees in the List: {items.length}</h1>
            {items.map(employee => <li key={employee.id} className='list-group-item'> {employee.name} | {employee.username} | {employee.email}
            <button onClick={() => onRemoveUser(employee.id)} className='btn btn-danger mx-3'>Delete</button>
            <button onClick={() => navigate('/viewEmployee/' + employee.id)} className='btn btn-primary mx-3'>View Employee</button>
            
            </li>)}
        </ul>
    );
}

export default EmployeeList;