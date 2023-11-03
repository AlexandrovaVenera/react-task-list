import React, { useState } from 'react';
import TaskItem from './task-item/TaskItem';

function TaskList({ data }) {
  const [items, setData] = useState(data);

  setData;
  return (
    <ul className="list-group mb-0">
      {items
        .sort((a, b) => a.id - b.id)
        .map((item, i) => {
          return (
            <TaskItem
              key={item.id}
              {...item}
              onDelete={() => console.log(item.id)}
            />
          );
        })}
    </ul>
  );
}

export default TaskList;
