import { TodoWrapper } from "./components_todo/TodoWrapper";

// main component
// npm start basically runs app.js
// so what you have inside app.js is what you see on the browser

// The app.js now has a single component TodoWrapper
//

function TodoList() {
  return (
    <div className="App mx-4">
      <TodoWrapper />
    </div>
  );
}

export default TodoList;
