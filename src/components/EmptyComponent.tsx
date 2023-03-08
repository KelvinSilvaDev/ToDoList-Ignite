import Clipboard from "../assets/Clipboard.svg";
import Styles from "./EmptyComponent.module.css";

export function EmptyComponent() {
  return (
    <div className={Styles.container}>
      <img width={56} src={Clipboard} />
      <h1>
        <strong>Você ainda não tem tarefas cadastrads</strong>
      </h1>
      <h1>Crie tarefas e organize seus itens a fazer.</h1>
    </div>
  );
}
