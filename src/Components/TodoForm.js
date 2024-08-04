import "../App.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  // Obtener las tareas actuales del contexto
  const { addTodo, setOpenModal, todos } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const trimmedTodo = newTodoValue.trim().toLowerCase();


    if (trimmedTodo === '') {
      setErrorMessage('Por favor, escribe una tarea antes de agregarla');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    const isDuplicate = todos.some((todo) => todo.text.toLowerCase() === trimmedTodo);

    if (isDuplicate) {
      setErrorMessage('No se pueden crear tareas iguales');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    addTodo(newTodoValue.trim());
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="Todo-form">
      <label className="Todo-form__label">Escribe tu nuevo Todo</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        className="Todo-form__textArea" 
        placeholder="Nueva tarea"
      />
      {errorMessage && <div className="Todo-form__error">{errorMessage}</div>}
      <div className="Todo-form__Container-Button">
        <button 
          type="button"
          className="Todo-form__Button-Cerrar"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit" 
          className="Todo-form__Button-Crear"
        >Crear</button>
      </div>
    </form>
  );
}

export { TodoForm };
