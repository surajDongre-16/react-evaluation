import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({tasks,todos}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(todos)
  return (
    <div className={styles.color}> 
      {tasks.map((el)=>(
        <li data-cy="task" className={styles.task}>
        <input type="checkbox" checked={el.done} data-cy="task-checkbox" />
        <div data-cy="task-text">{el.text}</div>
        {/* Counter here */}
        <Counter props={el.count}/>
        <button data-cy="task-remove-button">Delete</button>
      </li>
      ))}
      {todos.map((el)=>(
        <li data-cy="task" className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" />
        <div data-cy="task-text">{el.value}</div>
        {/* Counter here */}
        <Counter props={el.count}/>
        <button data-cy="task-remove-button">Del</button>
      </li>
      ))}
    </div>
    
  );
};



export default Task;
