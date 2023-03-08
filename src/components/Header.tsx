import Rocket from "../assets/rocket.svg";
import Styles from "./Header.module.css";

export function Header() {
  return (
    <div className={Styles.header}>
      <img className={Styles.logo} src={Rocket} alt="To do list logo" />
      <h1>to</h1>
      <h1>do</h1>
    </div>
  );
}
