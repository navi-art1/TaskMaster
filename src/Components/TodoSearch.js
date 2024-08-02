import React from "react";
import { TodoContext } from "../TodoContext";
import "../App.css";


function TodoSearch() {
  const { 
    searchValue, 
    setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="todo-search">
      <input 
        className="todo-search__input" 
        placeholder="Search..."
        value={searchValue} 
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
      <i className="todo-search__icon fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export { TodoSearch };
