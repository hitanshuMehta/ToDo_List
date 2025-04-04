import React, { useState } from "react";
import "./App.css";
import { toast } from "react-toastify";
import ToDoForm from "./component/ToDoForm";
import ToDoListItem from "./component/ToDoListItem";
import ToDoDate from "./component/ToDoDate";

const ToDo = () => {
  const [Task, SetTask] = useState(() => {
    const rawToDo = localStorage.getItem("reactToDo");
    if (!rawToDo) {
      return [];
    }
    return JSON.parse(rawToDo);
  });

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) {
      toast.error("Enter the Task First", {
        autoClose: 1000,
      });
      return;
    }

    const ifToDoContentMatch = Task.find(
      (curTask) => curTask.content === content
    );

    if (ifToDoContentMatch) {
      toast.error("Task Already Exist", {
        autoClose: 1000,
      });

      return;
    }

    SetTask((prevTask) => [...prevTask, { id, content, checked }]);
    toast.success("Task added Successfully", {
      autoClose: 1000,
    });
  };

  localStorage.setItem("reactToDo", JSON.stringify(Task));

  const handleDeleteTodo = (value) => {
    const updatedTask = Task.filter((curTask) => curTask.content !== value);

    SetTask(updatedTask);
  };

  const handleClearAll = () => {
    SetTask([]);
  };

  const handleCheckTodo = (content) => {
    const updateTask = Task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    SetTask(updateTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <ToDoDate />
      </header>

      <ToDoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {Task.map((curTask) => {
            return (
              <ToDoListItem
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                handleDeleteTodo={handleDeleteTodo}
                handleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All Tasks
        </button>
      </section>
    </section>
  );
};

export default ToDo;
