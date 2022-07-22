import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TodoItem from "./TodoItem";
const filterCat = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Uncompleted",
    value: "uncompleted",
  },
];

const ToDo = () => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);
  const [enterTask, setEnterTask] = useState("");

  const AddButton = () => (
    <Button variant="contained" color="success" onClick={handleTaskAdd}>
      +
    </Button>
  );

  const handleEnterTaskChange = (e) => {
    setEnterTask(e.target.value);
  };

  const handleTaskAdd = () => {
    if (enterTask) {
      let newTask = {
        title: enterTask,
        completed: false,
      };
      setEnterTask("");
      setTodos([...todos, newTask]);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="internal-main-cont">
      <h1 className="main-header">To-Do List</h1>
      <div className="search-input-container">
        <TextField
          id="filled-basic"
          className="input-todo-text"
          label="Enter List Item"
          variant="filled"
          value={enterTask}
          onChange={handleEnterTaskChange}
          InputProps={{
            endAdornment: <AddButton />,
          }}
        />
        <TextField
          id="filled-select-filter"
          select
          className="input-select-filter"
          label="Filter"
          value={filter}
          onChange={handleFilterChange}
          variant="filled"
        >
          {filterCat.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="todo-items-container">
        {todos.map((todo, idx) => {
          if(filter === "all")
           return <TodoItem key={idx} todo={todo.title} todos={todos} setTodos={setTodos} idx={idx}  />;
          else if(filter === "completed" && todo.completed)
            return <TodoItem key={idx} todo={todo.title} todos={todos} setTodos={setTodos} idx={idx}  />;
          else if(filter === "uncompleted" && !todo.completed)
            return <TodoItem key={idx} todo={todo.title} todos={todos} setTodos={setTodos} idx={idx}  />;
        })}
      </div>
    </div>
  );
};

export default ToDo;
