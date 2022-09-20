import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1'

// ===== Returns user task. Currently returns task for user 1 =====
async function httpGetUserTask() {
    const response = await axios.get(`${baseUrl}/user/tasks/${localStorage.getItem('userId')}`);
    return response.data;
}

// ===== User login api call =====
async function httpUserLogin(un, pw) {
    const result = await axios.post(`${baseUrl}/account/login`,{
        username : un,
        password : pw
    });
    return result.data;
}

// ===== Call to api to check if username is alreay in use =====
async function httpCheckUsername(name) {
    const result = await axios.get(`${baseUrl}/account/usernames/${name}`)
    return result.data;
}

// ===== Api call to create an account =====
async function httpRegisterNewUser(fn,ln, em, un, pwd) {
    const result = await axios.post('http://localhost:8080/api/v1/account/createAccount', {
        firstName : fn,
        lastName : ln,
        email : em,
        username : un,
        password : pwd
    })
    return result.data;
}

export {
    httpGetUserTask,
    httpUserLogin,
    httpCheckUsername,
    httpRegisterNewUser
}