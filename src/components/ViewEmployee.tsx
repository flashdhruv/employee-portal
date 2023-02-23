import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeBackend from "../services/employeeBackend";
import Employee from '../models/Employee';
import Posts from "../models/Posts";
import "../styling/viewEmployee.css";
import Navbar from "./Navbar";
interface ViewEmployeeProps {
    
}
 
const ViewEmployee: FunctionComponent<ViewEmployeeProps> = () => {

    const [details, setDetails] = useState<Employee> ();
    const [Userposts, setUserPosts] = useState<Posts[]> ([]);
    const { id } = useParams();

    const getDetails = async (id: number) => {
        const user = await employeeBackend.getUser(id);
        setDetails(user);
      }

      const getUserPosts = async (Userid: number) => {
        const posts = await employeeBackend.getPosts(Userid);
        setUserPosts(posts);
      }
      const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        let ID = Number(id);
        getUserPosts(ID);
        getDetails(ID);
        setFadeIn(true);
    },[])


    return ( 
<html>  
<body>
    <Navbar/>
    <div  className={`fade-in ${fadeIn ? 'visible' : ''}`}>
    <div className="container">
        <div className="left-userinfo">
            <h1>Welcome <br/> {details?.name}</h1>
        </div>

        <div className="right-extra">
            <div>
                <h2 className="heading">User Info</h2>
                <div>
                    <p>Username: {details?.username}</p>
                    <p>Email: {details?.email}</p>   
                </div>

                <h2 className="heading">Posts</h2>
                <div className="posts scrollable">
                    {Userposts.map(post => <li key={post.title}> <h3>{post.title}</h3> {post.body}</li>)}
                </div>

                
            </div>
        </div>
    </div>
    </div>
</body>
</html>
    );
}
 
export default ViewEmployee;