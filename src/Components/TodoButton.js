import "../App.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    console.log("Button clicked, toggling modal state");
    setOpenModal((prev) => !prev);
  };

  return (
    <div
      className="todo-button"
      onClick={handleClick}
      aria-label="Open/Close Todo Modal"
    >
      <div className="todo-button__container">
        <i className="todo-button__icon fa-solid fa-plus"></i>
      </div>
    </div>
  );
}


export { TodoButton };
