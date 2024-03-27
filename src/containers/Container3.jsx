import React from "react";
import styles from "./Container3.module.css";

export default function Container3() {
  return (
    <section className={styles.section} id="produtos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nossos <span>Serviços</span>
        </h2>
        <ul>
          <li>Galpão</li>
          <li>Galpão</li>
          <li>Galpão</li>
          <li>Galpão</li>
          <li>Galpão</li>
          <li>Galpão</li>
        </ul>
        <div className={styles.content}>
          <div className={styles.imgs}>
            <div className={styles.imgs1}>
              <div className={styles.img1}></div>
              <div className={styles.img2}></div>
            </div>
            <div className={styles.imgs2}>
              <div className={styles.img3}></div>
              <div className={styles.dataImg}>
                <h1>+20</h1>
                <p>de Experiencia</p>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <h2>
              Galpão <br />
              industrial
            </h2>
            <p>
              Numa pequena cidade à beira-mar, o tempo parecia parar. As ruas
              estreitas, adornadas por casas coloridas de estilo colonial,
              serpenteavam em direção ao oceano, onde as ondas quebravam
              suavemente na costa.
              <br />
              Os habitantes, em sua maioria pescadores e artesãos, viviam em
              harmonia com a natureza e as tradições que passavam de geração em
              geração.
            </p>
            <div className={styles.iconsDiv}>
              <div className={styles.icons}>
                <p>
                  Qualidade
                  <br />
                  garantida
                </p>
              </div>
              <div className={styles.icons}>
                <p>
                  Pagamento
                  <br />
                  simplificado
                </p>
              </div>
              <div className={styles.icons}>
                <p>
                  Materias
                  <br />
                  resistentes
                </p>
              </div>
            </div>
            <button>Fazer orçamento</button>
          </div>
        </div>
      </div>
    </section>
  );
}
