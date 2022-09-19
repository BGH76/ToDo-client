import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1'

async function httpGetUserTask() {
    // const response = await axios.get('http://localhost:8080/api/v1/user/tasks/1');
    const response = await axios.get(`${baseUrl}/user/tasks/1`);
    // console.log(response.data)
    return response.data;
}

async function httpUserLogin(un, pw) {
    const result = await axios.post(`${baseUrl}/login`,{
        username : un,
        password : pw
    });
    return result.data;
}

export {
    httpGetUserTask,
    httpUserLogin
}