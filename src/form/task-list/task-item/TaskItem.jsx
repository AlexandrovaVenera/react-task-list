import React from "react";
import "./TaskItem.css";

function TaskItem({ text, checked }) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <input
        defaultChecked={checked}
        className="form-check-input me-2"
        type="checkbox"
        value=""
        aria-label="..."
      />
      <span className={checked ? "task__checked" : ""}>{text}</span>
    </li>
  );
}

export default TaskItem;
