import React from "react";
import Styles from "./Todo.module.css";

function Todo({ name, status, complete, remove }) {
  return (
    <li className={Styles.todoItem} key={name}>
      {name}
      <div className={Styles.todoButtons}>
        <button
          className={`${!status ? Styles.complete : Styles.uncomplete}`}
          onClick={complete}
        >
          {`${!status ? "Complete" : "Uncomplete"}`}
        </button>
        <button className={Styles.remove} onClick={remove}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default Todo;
