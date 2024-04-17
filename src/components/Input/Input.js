import { Search } from "@/assets/icon/Search";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.input}>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.icon && (
        <div className={styles.icon} onClick={props.onClick}>
          <Search />
        </div>
      )}
    </div>
  );
}

export default Input;
