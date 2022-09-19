import React from "react";


const Task = (props) => {

    return (
        <div className="task-box">
            <div className="task">
                <h3>{props.task}</h3>
            </div>
            <div className="task task-button">
            <button>complete</button>
            </div>
            <div className="task task-button">
                <i className="bell icon green"></i>
            </div>
        </div>
    );
}
export default Task;