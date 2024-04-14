import Image from "next/image";
import styles from "./Character.module.css";
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";
import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import axios from "axios";

function Character() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    const url = "https://api.disneyapi.dev/character";

    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  // console.log(data?.data[0]?.name, "nome");
  return (
    <div className={styles.container}>
      <p>{data?.data?.name}</p>
      <div className={styles.box}>
        <Link href={"/"} passHref>
          <Image src={"/logo2.png"} width={165} height={126} />
        </Link>
        <div>
          <Input placeholder="Pesquisar" />
        </div>
      </div>
      <div className={styles.card} onClick={openModal}>
        {data?.data?.map((item) => {
          // console.log(item, "ITEM");
          return <Card nome={item.name} img={item.imageUrl} key={item.id} />;
        })}
      </div>
      {modalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Character;
