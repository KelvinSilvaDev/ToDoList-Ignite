import { Todo } from "../App";
import { EmptyComponent } from "./EmptyComponent";
import { TodoItem } from "./TodoItem";
import Styles from "./Todolist.module.css";

interface TodoList {
  todos: Todo[];
  removeTodo: (todo: Number) => void;
  doneTodo: (todo: Todo) => void;
}

export function TodoList({ todos, removeTodo, doneTodo }: TodoList) {
  function completedTodosCount() {
    return todos.filter((todo) => todo.completed).length;
  }

  return (
    <div className={Styles.wrapp}>
      <header>
        <h2 className={Styles.created}>
          Tarefas criadas <span>{todos.length}</span>
        </h2>
        <h2 className={Styles.done}>
          Concluidas{" "}
          <span>{`${completedTodosCount()} de ${todos.length}`}</span>
        </h2>
      </header>
      <div className={Styles.todoWrapper}>
        {todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <TodoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              key={todo.id}
              removeTodo={removeTodo}
              doneTodo={doneTodo}
              todo={todo}
            />
          ))
        ) : (
          <EmptyComponent />
        )}
      </div>
    </div>
  );
}
