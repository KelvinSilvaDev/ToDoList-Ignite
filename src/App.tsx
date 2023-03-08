import { SetStateAction, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo: Number) => {
    setTodos(todos.filter((t) => t.id !== todo));
  };

  const doneTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div id="app">
      <Header />
      <div id="wrapp">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />
      </div>
    </div>
  );
}

export default App;
