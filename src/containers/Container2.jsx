import React, { useEffect, useState } from "react";
import styles from "./Container2.module.css";
import IconImg from "../icons/Sobre/IconImg";

//Import Img
import SobreNos from "../assets/imgs/SobreNos.webp";

export default function Container2({ href }) {
  const [time, setTime] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const delayedAction = () => {
      setTime(true);
    };
    window.addEventListener("resize", handleWindowResize);
    setTimeout(delayedAction, 1000);
  }, []);

  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        <div className={`${styles.divImg} ${time ? styles.isLoaded : null}`}>
          <img src={SobreNos} alt="Imagem Empresa" />
          <div className={styles.svg}>
            <IconImg />
          </div>
        </div>
        <div className={styles.divData} data-aos="zoom-in-up">
          <h2>
            Sobre <span>Nós</span>
          </h2>
          <p>
            Desde 2016, desempenho e qualidade são nossa marca registrada. Com
            uma equipe altamente qualificada e foco em inovação, transformamos
            espaços industriais, comerciais e residenciais em obras-primas de
            aço inoxidável e alumínio. O que nos diferencia? É o nosso
            comprometimento inabalável com cada serviço prestado aos nossos
            clientes.
          </p>
          <a href={href}>
            <button>Fazer orçamento</button>
          </a>
        </div>
      </div>
    </section>
  );
}
