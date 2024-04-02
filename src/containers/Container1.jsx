import React, { useEffect, useState } from "react";
import styles from "./Container1.module.css";

export default function Container1() {
  const [time, setTime] = useState(false);

  useEffect(() => {
    const delayedAction = () => {
      setTime(true);
    };

    setTimeout(delayedAction, 1000);
  }, []);

  return (
    <section
      className={`${styles.section} ${time ? styles.isLoaded : null}`}
      id="home"
    >
      <div className={styles.container}>
        <div className={styles.subtitle}>
          <h2>Alta qualidade</h2>
        </div>
        <div className={styles.title}>
          <h1>
            Guarda corpo e <span>corrimão</span>
          </h1>
        </div>
        <div>
          <p>
            A Inox concept é uma empresa do ramo da serralheria que está situada
            na cidade de Campinas/SP.
          </p>
        </div>
        <div className={styles.button}>
          <button>Fazer orçamento</button>
        </div>
      </div>
    </section>
  );
}
