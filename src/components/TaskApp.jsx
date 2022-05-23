import React,{useState} from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask"
import Task from "./Task/Task";
import tasks from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [todos,setTodo]=useState([])

  const addTodo=(newTodo)=>{
    setTodo([...todos,{
      id:Date.now(),
      value:newTodo,
      count:1
    }])
    
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
     <h1 className={styles.text}>Todo List</h1>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask addTodo={addTodo}/>
      {/* Tasks */}
      <Task tasks={tasks} todos={todos} />
    </div>
  );
};

export default TaskApp;
