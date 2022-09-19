import React, { useState, useEffect } from "react";
import Task from "./Task";

import { httpGetUserTask } from "../httpActions";

const TaskList = () => {

    const[list, setList] = useState([]);
    const[task, setTask] = useState([]);

    useEffect(() => {
        async function getData() {
          try {
            const response = await httpGetUserTask(); // Right now method is getting data for userId 1 only
            setList(response);
            setTask(response[0].taskList)
          } catch(e) {
            console.log(e);
          }
        }
        getData();
      },[]);

      const renderList = () => {
        if(!task) return;
        try {
          return task.map((t) => {
            return (
              <Task key={t.id} name='Brian' task={t.task} />
            );
          })
        } catch(e) {
          return;
        }
      }

      return (
        <div className="ui container task-list">
            {renderList()}
        </div>
      );
}
export default TaskList;