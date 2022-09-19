import React from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {

    const navigate = useNavigate()

    const userLogin = (username, password) => {
        console.log(username);
        console.log(password);
        return false;
        // send username and password to backend and validate. if good, set localstorage and navigate to home.
        // if validation is not good return false.
    }

    return {
        userLogin
    }
}
export default useLogin;