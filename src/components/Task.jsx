import React from 'react';

const Task = ({ task, deleteTask, taskCompleted }) => {
  return (

    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => taskCompleted(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
     
    </li>

  );
};

export default Task;
