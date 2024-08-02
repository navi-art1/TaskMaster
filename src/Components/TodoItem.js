import "../App.css";

function TodoItem(props) {

  return (
    <div className="todo-item">
      <div className={`todo-item__content ${props.completed ? "todo-item__content--completed" : ""}`}
        onClick={props.onComplete}
      >
        <i className={`todo-item__icon fa-solid ${props.completed ? "fa-check todo-item__icon--completed" : "fa-minus"}`}></i>
        <p className={`todo-item__text ${props.completed ? "todo-item__text--completed" : ""}`}>{props.text}</p>
        <div className="todo-item__delete"
          onClick={(event)=>{
            event.stopPropagation();
            props.onDelete();
          }}
        >
          <i className="todo-item__delete-icon fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
}

export { TodoItem };
