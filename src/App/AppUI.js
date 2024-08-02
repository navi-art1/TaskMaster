import React, { useContext } from "react";
import { TodoBackground } from "../Components/TodoBackground";
import { TodoContainer } from "../Components/TodoContainer";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoButton } from "../Components/TodoButton";
import { TodoSearch } from "../Components/TodoSearch";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";

import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading, 
    error, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo, 
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <TodoBackground>
      <TodoContainer>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <TodoButton onClick={() => setOpenModal(prev => !prev)} />
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </TodoContainer>
    </TodoBackground>
  );
}

export { AppUI };
