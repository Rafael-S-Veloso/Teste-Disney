import Link from "next/link";
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
            <img src={props.img} width={190} height={190} />
            <h4>{props.name} </h4>
          </div>
          <div className={styles.title}>
            <div className={styles.filme}>
              <p className={styles.title}>FILMES</p>
              <p>{props.film || "Sem dados"}</p>
              <div />
            </div>
            <div className={styles.game}>
              <p className={styles.title}>VIDEO GAME</p>
              <p>{props.game || "Sem dados"}</p>
            </div>
            <div className={styles.show}>
              <p className={styles.title}>SHOW DE TV</p>
              <p>{props.show || "Sem dados"}</p>
            </div>
          </div>
        </div>
        <div className={styles.saibaMais}>
          <Link href={`${props.link}`} passHref>
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
