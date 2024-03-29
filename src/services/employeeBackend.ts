import axios from "axios";
import Employee from "../models/Employee";
import Posts from "../models/Posts";

class EmployeeService {
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/"
    });

    async getPosts(userId: number){
        const response = await this.http.get<Posts[]>('/users/' + userId + '/posts');
        return response.data;
    }

    async getUsers(){
        const response = await this.http.get<Employee[]>('/users');
        return response.data;
    }

    async getUser(id: number){
        const response = await this.http.get<Employee>('/users/' + id);
        return response.data;
    }

    async addUser(name: string, username: string, email: string){
        const response = await this.http.post<Employee>('/users', { name, username, email});
        return response.data;
    }

    async deleteUser(id: number){
        const response = await this.http.delete('/users/' + id);
        return response.data;
    }

}

export default new EmployeeService();