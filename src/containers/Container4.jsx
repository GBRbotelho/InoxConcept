import React from "react";
import styles from "./Container4.module.css";

export default function Container4() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Obras <span>Concluidas</span>
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.subtitleCard}>
              <span>Obra 1</span>
              <button>Ver mais</button>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.geo}>
                <p>Sumaré</p>
              </div>
              <div className={styles.metric}>
                <p>10.000</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.subtitleCard}>
              <span>Obra 1</span>
              <button>Ver mais</button>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.geo}>
                <p>Sumaré</p>
              </div>
              <div className={styles.metric}>
                <p>10.000</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.subtitleCard}>
              <span>Obra 1</span>
              <button>Ver mais</button>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.geo}>
                <p>Sumaré</p>
              </div>
              <div className={styles.metric}>
                <p>10.000</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.subtitleCard}>
              <span>Obra 1</span>
              <button>Ver mais</button>
            </div>
            <div className={styles.dataCard}>
              <div className={styles.geo}>
                <p>Sumaré</p>
              </div>
              <div className={styles.metric}>
                <p>10.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
