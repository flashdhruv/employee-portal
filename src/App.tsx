import React, { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList';
import Employee from './models/Employee';
import employeeBackend from './services/employeeBackend';
import NewEmployee from './components/newEmployee';


function App() {

  const [employees, setEmployees] = useState<Employee[]> ([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await employeeBackend.getUsers();
    setEmployees(users);
  }

  const removeUser = (id: number) =>{
    setEmployees(employees.filter(employee => employee.id !== id));
  }
  
  const addUser = async (name: string, username: string, email: string) => {
    const newEmployee = await employeeBackend.addUser(name, username, email);
    setEmployees([newEmployee, ...employees]);
  }

  

  return (
    <div className="App">
      <EmployeeList items={employees} onRemoveUser={removeUser}/> 
    </div>
  );
}

export default App;
