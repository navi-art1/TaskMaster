import "../App.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="todo-counter">
      <h1 className="todo-counter__title">Gestor de Tareas</h1>
      <h2 className="todo-counter__subtitle">
        {completedTodos === 0
          ? "Sin tareas completas. ¡A trabajar!"
          : completedTodos === totalTodos
          ? "¡Felicidades! Has completado todas tus tareas."
          : `Has completado ${completedTodos} de ${totalTodos} tareas. ¡Continúa así!`}
      </h2>
    </div>
  );
}

export { TodoCounter };
