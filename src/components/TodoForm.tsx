import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import Styles from "./TodoForm.module.css";

export function TodoForm({ addTodo }: any) {
  const [text, setText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    addTodo(newTodo);
    setText("");
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <input
        className={Styles.input}
        type="text"
        value={text}
        placeholder="Adicionar uma nova tarefa"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        Criar <PlusCircle size={24} />
      </button>
    </form>
  );
}
