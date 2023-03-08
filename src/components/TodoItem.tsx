import { Trash } from "phosphor-react";
import { useState } from "react";
import { Todo } from "../App";
import Styles from "./TodoItem.module.css";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  removeTodo: (todo: Number) => void;
  doneTodo: (todo: Todo) => void;
  todo: Todo;
}

export function TodoItem({ id, text, removeTodo, doneTodo, todo }: TodoItem) {
  const [checked, setChecked] = useState(false);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleDone = () => {
    setChecked((current) => !current);
    doneTodo(todo);
  };

  return (
    <>
      {checked ? (
        <form className={Styles.todoItem}>
          <label className={Styles.checked}>
            <input type="checkbox" onChange={handleDone} />
            <span className={Styles.checkmark}></span>
            {text}
          </label>
          <Trash onClick={handleRemove} />
        </form>
      ) : (
        <form className={Styles.todoItem}>
          <label className={Styles.unchecked}>
            <input type="checkbox" onChange={handleDone} />
            <span className={Styles.checkmark}></span>
            {text}
          </label>
          <Trash onClick={handleRemove} />
        </form>
      )}
    </>
  );
}
