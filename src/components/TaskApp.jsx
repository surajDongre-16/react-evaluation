import React,{useState} from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks";
import tasks from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair


  const [todos,setTodo]=useState(tasks)

  const addTodo=(newTodo)=>{
    setTodo([...todos,{
      id:Date.now(),
      text:newTodo,
      count:1
    }])
  }
  const remove=(id)=>{
    console.log(id)
    setTodo(todos.filter((el)=> el.id !==id))
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
     <h1 className={styles.text}>Todo List</h1>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask addTodo={addTodo}/>
      {/* Tasks */}
      <Tasks key={todos.id} todos={todos} remove={remove}/>
    </div>
  );
};

export default TaskApp;
