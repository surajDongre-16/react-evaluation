import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTodo}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [value,setValue]=useState("")

  return (
    <div className={styles.todoForm}>
      <input className={styles.addTask} data-cy="add-task-input" value={value} type="text" placeholder="Add task..." onChange={(e)=>(
        setValue(e.target.value)
      )} />
      <button className={styles.btn} data-cy="add-task-button" onClick={()=>{
        // console.log(value)
        addTodo(value)
        setValue("")
      }}>+</button>
      
    </div>
  );
};

export default AddTask;
