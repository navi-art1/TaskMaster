import "../App.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() === '') {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000);
    } else {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (showErrorMessage) {
      setShowErrorMessage(false);
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
      {showErrorMessage && <div className="Todo-form__error">Por favor, escribe una tarea antes de agregarla</div>}
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
