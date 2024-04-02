import React from "react";
import styles from "./Container2.module.css";
import IconImg from "../icons/Sobre/IconImg";

//Import Img
import SobreNos from "../assets/imgs/SobreNos.webp";

export default function Container2() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        <div className={styles.divImg}>
          <img src={SobreNos} alt="Imagem Empresa" />
          <div className={styles.svg}>
            <IconImg />
          </div>
        </div>
        <div className={styles.divData}>
          <h2>
            Sobre <span>Nós</span>
          </h2>
          <p>
            Numa pequena cidade à beira-mar, o tempo parecia parar. As ruas
            estreitas, adornadas por casas coloridas de estilo colonial,
            serpenteavam em direção ao oceano, onde as ondas quebravam
            suavemente na costa. <br />
            Os habitantes, em sua maioria pescadores e artesãos, viviam em
            harmonia com a natureza e as tradições que passavam de geração em
            geração.
          </p>
          <button>Fazer orçamento</button>
        </div>
      </div>
    </section>
  );
}
