import React, { useState, useEffect } from "react";
import Task from "./Task";
import AddNewTask from "../components/AddNewTask";

import { httpGetUserTask } from "../httpActions";

const TaskList = () => {

    // const[list, setList] = useState([]);
    const[task, setTask] = useState([]);
    const[refresh, setRefresh] = useState(false) 
    useEffect(() => {
        async function getData() {
          try {
            const response = await httpGetUserTask();
            // setList(response);
            setTask(response[0].taskList)
            // console.log(response)
          } catch(e) {
            console.log(e);
          }
        }
        getData();
      },[refresh]);

      const refreshPage = () => {
        refresh === true ? setRefresh(false) : setRefresh(true)
      }

      const renderList = () => {
        if(!task) return;
        try {
          return task.map((t) => {
            return (
              <Task 
                key={t.id}
                name='Brian'
                task={t.task}
                id={t.id}
                complete={t.complete}
                date={t.date_task_created}
                refresh={refresh}
                setRefresh={setRefresh} 
              />
            );
          })
        } catch(e) {
          return;
        }
      }

      return (  
        <div className="ui container task-list">
          <AddNewTask refresh={refresh} setRefresh={setRefresh}/>
          {renderList()}
        </div>
      );
}
export default TaskList;