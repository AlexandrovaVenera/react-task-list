import React from "react";
import TaskItem from "./task-item/TaskItem";

function TaskList() {
  const data = [
    { text: "Cras justo odio", checked: true },
    { text: "Dapibus ac facilisis in", checked: true },
    { text: "Morbi leo risus", checked: false },
    { text: "Porta ac consectetur ac", checked: false },
  ];
  return (
    <ul className="list-group mb-0">
      {data.map((item, i) => {
        return <TaskItem key={i} {...item} />;
      })}
    </ul>
  );
}

export default TaskList;
