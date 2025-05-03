import { useState } from 'react';
import TaskItem from "./components/TaskItem";
import './App.css'; // Importamos los estilos

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const handleAddTask = () => {
    // Validaciones
    if (!task.trim()) {
      setError('La tarea no puede estar vacía');
      return;
    }
    
    if (tasks.some(t => t.text.toLowerCase() === task.toLowerCase().trim())) {
      setError('Esta tarea ya existe');
      return;
    }

    // Agregar tarea con fecha/hora
    setTasks([...tasks, {
      text: task.trim(),
      createdAt: new Date().toLocaleString() // Fecha/hora actual
    }]);
    
    setTask('');
    setError('');
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>To-Do List Mejorada</h1>
      
      <div className="input-container">
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError('');
          }}
          placeholder="Nueva tarea"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Agregar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {/* Contador de tareas */}
      <div className="task-counter">
        Tareas pendientes: <span>{tasks.length}</span>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <TaskItem
            key={index}
            task={t.text}
            createdAt={t.createdAt}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;