import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./TodoList.module.css";

import TodoItem from "../TodoItem";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputHandleOnChange = (event) => {
    setInput(event.target.value);
  };

  const addItemTask = (event) => {
    event.preventDefault();
    const inputTrimed = input.trim();
    if (!inputTrimed) return;

    setTasks([...tasks, { id: uuidv4(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.todoListContainer}>
      <h1 className={styles.title}>To do List</h1>

      <form className={styles.newTaskInput}>
        <h2>New Task</h2>
        <div>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={inputHandleOnChange}
          />
          <button
            className={styles.addButton}
            onClick={addItemTask}
            aria-label="Add new task"
          >
            add
          </button>
        </div>
      </form>

      <ol className={styles.taskList}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
