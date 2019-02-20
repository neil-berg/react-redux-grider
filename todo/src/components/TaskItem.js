import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onCheckClick, onTrashClick }) => {
  let className = 'task-item ui segment';
  if (task.completed) {
    className += 'completed';
  }
  return (
    <div className={className}>
      <p className="task-text">{task.description}</p>
      <i className="check square icon" onClick={() => onCheckClick(task)} />
      <i className="trash alternate icon" onClick={() => onTrashClick(task)} />
    </div>
  );
};

export default TaskItem;
