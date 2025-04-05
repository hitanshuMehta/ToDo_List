import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCheckboxUnchecked } from "react-icons/im";

const ToDoListItem = ({ data, handleDeleteTodo, handleCheckTodo, checked }) => {
  return (
   
      <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => handleCheckTodo(data)}>
        {checked ? <FaRegCheckCircle /> : <ImCheckboxUnchecked />}
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDelete />
      </button>
    </li>
    
  );
};

export default ToDoListItem;
