import React, { useState, useEffect } from "react";

import { httpTaskComplete } from "../httpActions";


const Task = (props) => {

    const [iconColor, setIconColor] = useState('green')

    useEffect(() => {
        const taskDate = new Date(props.date).getTime();
        const checkDate = new Date().getTime();
        const differenceInDays = (checkDate - taskDate) / (1000 * 3600 * 24)                    
        if(differenceInDays > 5) {
            setIconColor('red')
        }
        else if(differenceInDays > 3) {
            setIconColor('yellow')
        }
    }, [])

    const taskComplete = async () => {
        await httpTaskComplete(props.id)
        props.refresh === true ? props.setRefresh(false) : props.setRefresh(true)
    }

    return (
        <div className="task-box">
            <div className="task">
                <h3>{props.task}</h3>
            </div>
            <div className="task task-button">
            <button onClick={()=>taskComplete()}>complete</button>
            </div>
            <div className="task task-button">
                <i className={`bell icon ${iconColor}`}></i>
            </div>
        </div>
    );
}
export default Task;