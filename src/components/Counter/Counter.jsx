import React, {useState} from "react";
import styles from "./counter.module.css";

const Counter = ({props}) => {
  // sample value to be replaced
  const [count, setCount]=useState(props)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
        <button data-cy="task-counter-increment-button" onClick={()=>(
          setCount(count +1 )
        )}>+</button>
        <span data-cy="task-counter-value">{count}</span>
        <button data-cy="task-counter-decrement-button" onClick={()=>(
         count>1 ? setCount(count - 1) : ""
          
        )}>-</button>
    </div>
  );
};

export default Counter;
