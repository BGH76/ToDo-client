import React from "react";

const AddNewTask = () => {

    return(
        <div className="ui container task-entry-box">
            <form>
                <textarea className="entry-box" placeholder="Enter Task"></textarea>
            </form>
            <button className="entry-box-btn">submit</button>
            
        </div>
    );
}
export default AddNewTask;