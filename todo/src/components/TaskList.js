import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onCheckClick, onTrashClick }) => {
  const renderedList = tasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
      onCheckClick={onCheckClick}
      onTrashClick={onTrashClick}
    />
  ));
  return <div className="task-list ui segments">{renderedList}</div>;
};

export default TaskList;
