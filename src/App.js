import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="containers">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
