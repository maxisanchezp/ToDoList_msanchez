import React, { useState } from "react";
import trashIcon from "./resources/icons8-trash-64.png";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoverIndex, setHoverIndex] = useState();
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function deleteAll() {
    setTasks([]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  return (
    <div className="container">
      <div className="to-do-list">
        <h1>ToDo App</h1>
        <div>
          <input
            type="text"
            placeholder="Ingrese la actividad..."
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="add-button" onClick={addTask}>
            +
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex()}
            >
              <span className="text">{task}</span>
              {hoverIndex === index && (
                <button
                  className="trash-delete"
                  onClick={() => deleteTask(index)}
                >
                  <img src={trashIcon} alt="" />
                </button>
              )}
            </li>
          ))}
        </ol>
        <div className="delete-div">
          <p>Tiene {tasks.length} tareas pendientes</p>
          <button className="delete-btn" onClick={deleteAll}>
            Borrar Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;