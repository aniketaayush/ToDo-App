import React, { useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TodoItem.css";

const TodoItem = ({ todo, idx, todos, setTodos }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if(todos[idx].completed) {
      inputRef.current.style.textDecoration = "line-through";
    }
    else {
      inputRef.current.style.textDecoration = "none";
    }
  }, [todos]);

  const handleDoneClick = (e) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };
  const handleDeleteClick = (e) => {
    todos.splice(idx, 1);
    setTodos([...todos]);
  };
  const TaskButtons = () => (
    <ButtonGroup className="button-grp-task">
      <Button
        variant="contained"
        color="success"
        className="task-btn"
        onClick={handleDoneClick}
      >
        <DoneIcon />
      </Button>
      <Button
        variant="contained"
        color="error"
        className="task-btn"
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </Button>
    </ButtonGroup>
  );
  return (
    <div className="todotask-container">
      <TextField
        variant="filled"
        inputProps={{ readOnly: true, className: "todo-item-text-field" }}
        color="none"
        value={todo}
        label={undefined}
        ref={inputRef}
      />
      <TaskButtons />
    </div>
  );
};

export default TodoItem;
