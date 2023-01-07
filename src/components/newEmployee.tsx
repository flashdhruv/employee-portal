import React, { useState } from 'react';

interface newEmployeeProps {
    onAddUser: (name: string, username: string, email: string) => void;
}

function NewEmployee({onAddUser} : newEmployeeProps) {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        onAddUser(name, username, email);
        setName('');
        setEmail('');
        setUserName('');
    }

    

    return (
        <form className='mx-3 my-3' onSubmit={submitForm}>
            <label htmlFor="name" className='mx-2'>Name</label>
            <input value={name} onChange = {e => setName(e.target.value)} type="text" className="fom-control mx-2" />
            
            <label htmlFor="username" className='mx-2'>Usename</label>
            <input value={username} onChange = {e => setUserName(e.target.value)} type="text" className="fom-control mx-2" />

            <label htmlFor="email" className='mx-2'>Email</label>
            <input value={email} onChange = {e => setEmail(e.target.value)} type="text" className="fom-control mx-2" />

            <button type='submit' className="btn btn-primary rounded-pill mx-2">Add  Employee</button>
        </form>
    );
}

export default NewEmployee;