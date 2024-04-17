import Image from "next/image";
import styles from "./Erro.module.css";

function PageError() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={"/logoErro.png"} width={265} height={360} alt="logo" />
      </div>
      <div className={styles.text}>
        <p>Não foi encontrado nenhum personagem!</p>
      </div>
    </div>
  );
}

export default PageError;
