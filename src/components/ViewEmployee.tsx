import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeBackend from "../services/employeeBackend";
import Employee from '../models/Employee';
import Posts from "../models/Posts";
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
        console.log(posts);
        setUserPosts(posts);
      }

    useEffect(() => {
        let ID = Number(id);
        getUserPosts(ID);
        getDetails(ID);
    }, [])


    return ( 
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Welcome {details?.name}</h1>
                <p>Email: {details?.email}</p>
                <p>Username: {details?.username}</p>
            </div>
            <div className="col">
                {Userposts.map(post => <li key={post.title}> <h4>{post.title}</h4> <br/> {post.body}</li>)}
            </div>
        </div>
    </div> 
    );
}
 
export default ViewEmployee;