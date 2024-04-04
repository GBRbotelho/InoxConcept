import React from "react";
import styles from "./Container5.module.css";
import Map from "../icons/Obras/Map";
import Phone from "../icons/Contato/Phone";
import Instagram from "../icons/Contato/Instagram";

export default function Container5() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        <h1 className={styles.title} data-aos="fade-up">
          Entre em <span>contato</span>
        </h1>
        <div className={styles.content} data-aos="fade-up">
          <div className={styles.data}>
            {/* <div className={styles.card}>
              <div className={styles.icon}>
                <Map />
              </div>
              <div className={styles.dataCard}>
                <h3>Endereço</h3>
                <p>
                  Rua joão marino da silva, 23 campinas sp
                  <br />
                  cep 12374345
                </p>
              </div>
            </div> */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <div className={styles.dataCard}>
                <h3>WhatsApp</h3>
                <p>(19) 9 9473-5471</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Instagram />
              </div>
              <div className={styles.dataCard}>
                <h3>Instagram</h3>
                <p>@inox.concept</p>
              </div>
            </div>
          </div>
          {/* <div className={styles.maps}></div> */}
        </div>
      </div>
    </section>
  );
}
