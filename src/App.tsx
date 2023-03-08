import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="wrapp">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
