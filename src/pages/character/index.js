import Image from "next/image";
import styles from "./Character.module.css";
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";
import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Error from "../../../public/imagem-erro.jpg";
import PageError from "@/components/PageError/Error";

function Character() {
  const router = useRouter();
  const { name } = router.query;
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [select, setSelect] = useState(null);
  const [search, setSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Resposta = useCallback(() => {
    const url = `https://api.disneyapi.dev/character?&name=${
      search ? search : name
    }`;
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  useEffect(() => {
    if (name || search) {
      Resposta();
    }
  }, [name, search]);

  const openModal = (character) => {
    setSelect(character);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/character?name=${search}`);
      Resposta();
    }
  };

  return (
    <div className={styles.container}>
      <p>{data?.data?.name}</p>
      <div className={styles.box}>
        <Link href={"/"} passHref>
          <Image src={"/logo2.png"} width={165} height={126} alt="logo" />
        </Link>
        <div>
          <Input
            placeholder="Pesquisar"
            icon={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={handleSearch}
          />
        </div>
      </div>
      {data?.data.length > 0 ? (
        <div className={styles.card}>
          {Array.isArray(data?.data) &&
            data?.data?.map((item, index) => {
              return (
                <span onClick={() => openModal(item)} key={index}>
                  <Card
                    nome={item.name || "Sem dados"}
                    img={item.imageUrl || Error}
                  />
                </span>
              );
            })}
        </div>
      ) : (
        <div className={styles.error}>
          <PageError />
        </div>
      )}
      {modalOpen && (
        <div className={styles.modal}>
          <Modal
            name={select.name}
            onClose={closeModal}
            img={select.imageUrl || Error}
            film={
              windowWidth < 475
                ? select.films.slice(0, 1)
                : select.films.slice(0, 3)
            }
            game={
              windowWidth < 475
                ? select.videoGames.slice(0, 1)
                : select.videoGames.slice(0, 3)
            }
            link={select.sourceUrl}
          />
        </div>
      )}
    </div>
  );
}

export default Character;
