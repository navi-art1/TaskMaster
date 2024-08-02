import "../App.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="todo-counter">
      <h1 className="todo-counter__title">Tareas de Ximena</h1>
      <h2 className="todo-counter__subtitle">
        {completedTodos === 0
          ? "Abuelita, es hora de empezar tus tareas"
          : completedTodos === totalTodos
          ? "¡Felicitaciones, Ximena! Te ganaste un fourloko 🎉"
          : `Has completado ${completedTodos} de ${totalTodos} tareas, abuelita. ¡Sigue así!`}
      </h2>
    </div>
  );
  
}

export { TodoCounter };
