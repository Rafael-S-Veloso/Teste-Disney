import Image from "next/image";
import styles from "./Character.module.css";
import Input from "@/components/Input/Input";

function character() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image src={'/logo2.png'} width={165} height={126} />
        <div>
          <Input placeholder="Pesquisar" />
        </div>
      </div>
    </div>
  )
}

export default character;