import React from "react";

import style from "./TodoItem.module.css";

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={style.taskItem} key={task.index}>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </p>
      <input
        className={style.taskItemCompleted}
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <button
        className={style.deleteButton}
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
