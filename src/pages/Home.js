import React, { useState } from "react";

import NavBar from "../components/NavBar";
import TaskList from "../components/TaskList";
import NameLogo from "../components/NameLogo";
// import AddNewTask from "../components/AddNewTask";

const Home = () => {
    

    return(
        <div className="">
            <NavBar />
            <NameLogo />
            {/* <AddNewTask /> */}
            <TaskList />
        </div>
    );
}
export default Home;