import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styling/HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    },[])

    return ( 
        <html>  
            <body>
            <div  className={`fade-in ${fadeIn ? 'visible' : ''}`}>
                <h1 className='title'>Welcome to the Portal</h1>
                <div className="container">
                    <div className="left">
                        <div>
                            <h1 className='btn from-left'
                            onClick={() => navigate('/listOfEmployees')}
                            >View Employees</h1>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h1 className='btn from-right'
                            onClick={() => navigate('/AddEmployee')}
                            >Add Employee</h1>
                        </div>
                    </div>
                </div>
                </div>
            </body>
        </html>

    );
}
 
export default HomePage;