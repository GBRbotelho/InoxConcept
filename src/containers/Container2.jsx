import React from "react";
import styles from "./Container2.module.css";
import IconImg from "../icons/Sobre/IconImg";

//Import Img
import SobreNos from "../assets/imgs/SobreNos.webp";

export default function Container2() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        <div className={styles.divImg} data-aos="fade-up-right">
          <img src={SobreNos} alt="Imagem Empresa" />
          <div className={styles.svg}>
            <IconImg />
          </div>
        </div>
        <div className={styles.divData} data-aos="fade-up-left">
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
          <button>Fazer orçamento</button>
        </div>
      </div>
    </section>
  );
}
