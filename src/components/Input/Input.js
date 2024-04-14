import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.input}>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />

      <div className={styles.icon}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <path
            d="M8.5 0C3.80078 0 0 3.80078 0 8.5C0 13.1992 3.80078 17 8.5 17C10.1777 17 11.7305 16.5078 13.0469 15.6719L19.1875 21.8125L21.3125 19.6875L15.25 13.6406C16.3398 12.2109 17 10.4395 17 8.5C17 3.80078 13.1992 0 8.5 0ZM8.5 2C12.0996 2 15 4.90039 15 8.5C15 12.0996 12.0996 15 8.5 15C4.90039 15 2 12.0996 2 8.5C2 4.90039 4.90039 2 8.5 2Z"
            fill="#346BAC"
          />
        </svg>
      </div>
    </div>
  );
}

export default Input;
