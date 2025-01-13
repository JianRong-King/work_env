import React, { useState } from "react";

interface EditToDoFormProps {
  editTodo: (
    value: string,
    id: string,
    completed: boolean,
    isEditing: boolean
  ) => void;
  task: { task: string; id: string };
}

export const EditToDoForm: React.FC<EditToDoFormProps> = ({
  editTodo,
  task,
}) => {
  // takes in addTodo as a prop
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editTodo(value, task.id, false, false);

    setValue(""); // clear the input field after submitting
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} // showing in the text box
      />

      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
