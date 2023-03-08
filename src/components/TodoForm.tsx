import { PlusCircle } from "phosphor-react";
import Styles from "./TodoForm.module.css";

export function TodoForm() {
  return (
    <form className={Styles.form}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={32} />
      </button>
    </form>
  );
}
