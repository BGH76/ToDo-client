import React, { useState } from "react";
import { httpAddNewTaskToUser } from "../httpActions";

const AddNewTask = ({refresh, setRefresh}) => {
    const [newTask, setNewTask] = useState('');

    const submitNewTask = async () => {
        if(newTask === '') return;
        await httpAddNewTaskToUser(newTask);
        refresh === true ? setRefresh(false) : setRefresh(true);
        setNewTask('');
    }

    return(
        <div className="ui container task-entry-box">
            <form>
                <textarea className="entry-box" value={`${newTask}`} onChange={(e)=>setNewTask(e.target.value)} placeholder="Enter Task"></textarea>
            </form>
            <button className="entry-box-btn" onClick={()=>submitNewTask()}>submit</button>
            
        </div>
    );
}
export default AddNewTask;