"use client";
import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./todo";
import { EditToDoForm } from "./EditToDoForm";

type todoObj = Readonly<{
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}>;

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<todoObj[]>([]); // Initialize with an empty array

  // Fetch initial state from localStorage when the component mounts
  useEffect(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue) {
      setTodos(JSON.parse(localValue));
    }
  }, []);

  // Save updated state to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (
    task: string,
    id: string,
    completed: boolean,
    isEditing: boolean
  ) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="TodoWrapper h-full">
      <h1>Todo Of The Day!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} // take editTodo function
          />
        )
      )}
    </div>
  );
};
