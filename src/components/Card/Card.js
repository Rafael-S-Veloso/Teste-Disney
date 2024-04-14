import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src={props.img} width={190} height={190} />
        <div>
          <h4>{props.nome}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
