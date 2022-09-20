import React from "react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

    const navigate = useNavigate();

    const runLogout = () => {
        localStorage.removeItem('userId');
        navigate('/')
    }

    return(
        <div className="ui container nav-bar btn" onClick={()=>runLogout()}>
            Logout
        </div>
    );
}
export default NavBar;