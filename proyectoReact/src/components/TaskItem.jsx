function TaskItem({ task, createdAt, onDelete }) {
    return (
      <li className="task-item">
        <div className="task-content">
          <span className="task-text">{task}</span>
          <span className="task-date">{createdAt}</span>
        </div>
        <button onClick={onDelete} className="delete-button">
          Eliminar
        </button>
      </li>
    );
  }
  
  export default TaskItem;