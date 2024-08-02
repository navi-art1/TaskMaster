import "../App.css";
function TodoList({ children }) {
  return <ul className="todo-list">{children}</ul>;
}
export { TodoList };
