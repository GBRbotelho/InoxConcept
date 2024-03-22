import React from "react";
import styles from "./Container1.module.css";

export default function Container1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.subtitle}>
          <h2>Alta qualidade</h2>
        </div>
        <div className={styles.title}>
          <h1>
            Estruturas <span>Metálicas</span>
          </h1>
        </div>
        <div>
          <p>
            Para prevenir e tratar mais de 400 sintomas físicos e emocionais de
            maneira segura e totalmente natural!
          </p>
        </div>
        <div className={styles.button}>
          <button>Fazer orçamento</button>
        </div>
      </div>
    </section>
  );
}
