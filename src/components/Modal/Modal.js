import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modalBackdrop} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={props.onClose}>
          X
        </button>
        <div className={styles.container}>
          <div className={styles.boxImg}>
            <img src={"/fundo2.png"} width={190} height={190} />
          </div>
          <div className={styles.title}>
            <div className={styles.filme}>
              <p>FILMES</p>
              <p>Hercules (film)</p>
              <div />
            </div>
            <div>
              <p>VIDEO GAME</p>
              <p>Kingdom Hearts III</p>
            </div>
            <div className={styles.show}>
              <p>SHOW DE TV</p>
              <p>Hercules (TV series)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
