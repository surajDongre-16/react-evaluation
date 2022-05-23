import React,{useState} from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({todos, remove}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.color}> 
      {todos.map((el)=>(
        <li data-cy="task" className={styles.task} key={el.id}>
        <input  type="checkbox" data-cy="task-checkbox" checked={el.done} />
        <div data-cy="task-text">{el.text}</div>
        {/* Counter here */}
        <Counter props={el.count}/>
        <button data-cy="task-remove-button" onClick={()=>(
          remove(el.id)
        )} >Delete</button>
      </li>
      ))}

    </div>
  );
};

export default Task;
