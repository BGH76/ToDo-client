import axios from "axios";
import { generateHash, compareHash } from "../hooks/encrypt";

const baseUrl = 'http://localhost:8080/api/v1'

// ===== Returns user tasks list =====
async function httpGetUserTask() {
    const response = await axios.get(`${baseUrl}/user/tasks/${localStorage.getItem('userId')}`);
    return response.data;
}

// ===== User login api call =====
async function httpUserLogin(un, pw) {
    const result = await axios.get(`${baseUrl}/account/username/${un}`);
    if(compareHash(pw, result.data.password)) {
        return {
            status : true,
            userId : result.data.user_profile.id
        }
    } else {
        return {
            status : false
        }
    }
}

// ===== Call to api to check if username is alreay in use =====
async function httpCheckUsername(name) {
    const result = await axios.get(`${baseUrl}/account/usernames/${name}`)
    return result.data;
}

// ===== Api call to create an account =====
async function httpRegisterNewUser(fn,ln, em, un, pwd) {
    const password = generateHash(pwd);
    const result = await axios.post('http://localhost:8080/api/v1/account/createAccount', {
        firstName : fn,
        lastName : ln,
        email : em,
        username : un,
        password : password
    })
    return result.data;
}

// ===== Add new task to user =====
async function httpAddNewTaskToUser(t) {
    const result = await axios.post(`${baseUrl}/user/task`, 
    {
        userId : localStorage.getItem('userId'),
        task : t
    })
    return result;
}
// Just to build test data. Remove after app is complete
async function httpAddNewTaskToUsertest(id, t) {
    const result = await axios.post(`${baseUrl}/user/task`, 
    {
        userId : id,
        task : t
    })
    return result;
}

//===== Mark task as complete =====
async function httpTaskComplete(num) {
    await axios.post(`${baseUrl}/user/complete/${num}`)
}

export {
    httpGetUserTask,
    httpUserLogin,
    httpCheckUsername,
    httpRegisterNewUser,
    httpAddNewTaskToUser,
    httpTaskComplete,
    httpAddNewTaskToUsertest
}