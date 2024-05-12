import React from "react";
import styles from "./Container5.module.css";
import Map from "../icons/Obras/Map";
import Phone from "../icons/Contato/Phone";
import Instagram from "../icons/Contato/Instagram";

export default function Container5({ href }) {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        <h1 className={styles.title} data-aos="zoom-in">
          Entre em <span>contato</span>
        </h1>
        <div className={styles.content} data-aos="zoom-in">
          <div className={styles.data}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Map />
              </div>
              <div className={styles.dataCard}>
                <h2>Endereço</h2>
                <p>
                  R. José Ferreira da Silva, 434 - Quadra LE - Parque da
                  Figueira
                  <br />
                  Campinas - SP, 13040-220
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <div className={styles.dataCard}>
                <h2>WhatsApp</h2>
                <a href={href}>
                  <p>(19) 9 9473-5471</p>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Instagram />
              </div>
              <div className={styles.dataCard}>
                <h2>Instagram</h2>
                <a href="https://www.instagram.com/inox.concept?igsh=dWE3YWxlM2xwdmww">
                  <p>@inox.concept</p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.maps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14696.72625662531!2d-47.0620964!3d-22.9435395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5ecfbc490b48fbd%3A0xb209763aa8ce1ea5!2sINOX%20CONCEITO!5e0!3m2!1spt-BR!2sbr!4v1715473501129!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
