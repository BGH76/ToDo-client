import React, { useState, useEffect } from "react";
import { httpGetUserTask } from "../httpActions";

const TaskDisplay = (props) => {

    const[list, setList] = useState([]);
    const[task, setTask] = useState([]);

    useEffect(() => {
        async function getData() {
          try {
            const response = await httpGetUserTask();
            console.log(response);
            setList(response);
            setTask(response[0].taskList)
          } catch(e) {
            console.log(e);
          }
        }
        getData();
        
      },[]);

      const renderList = () => {
        if(!list) return;
        try {
          return list.map((list) => {
            return (
              <div key={list.id}>
                <p>{list.first_name}</p>
                <p>{list.last_name}</p>
              </div>
            );
          })
        } catch(e) {
          return;
        }
      }
      


    return(
        <div>
            TaskDisplay
            <p>{props.name}</p>
            <p>{props.task}</p>
        </div>
    );
}
export default TaskDisplay;