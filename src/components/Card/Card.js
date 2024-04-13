import styles from "./Card.module.css";
import Image from "next/image";

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.boxImg}>
                <Image src={'/fundo2.png'} width={190} height={190} />
                <div>
                    <h4>texto</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;