import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // takes in addTodo as a prop
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(value);

    setValue(""); // clear the input field after submitting
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)} // showing in the text box
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

// form element is used to create an HTML form for user input
// grouping input by fields, serves as a container for form controls // text fields, checkboxes, radio buttons, buttons, etc.) that allow users to input data.

// In this example we are using form
// which holds a input type of text and a button
// form is a jsx element
