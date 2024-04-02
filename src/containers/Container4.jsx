import React, { useEffect, useState } from "react";
import styles from "./Container4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Map from "../icons/Obras/Map";
import Metros from "../icons/Obras/Metros";

export default function Container4() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section} id="obras">
      <div className={styles.container} data-aos="fade-up">
        <h2 className={styles.title}>
          Obras <span>Concluidas</span>
        </h2>
        <div className={styles.cards}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween="2%"
            slidesPerView={
              (windowWidth > 1000 && 4) ||
              (windowWidth > 650 && windowWidth <= 1000 && 3) ||
              (windowWidth > 400 && windowWidth <= 650 && 2) ||
              (windowWidth <= 400 && 1)
            }
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.subtitleCard}>
                  <span>Obra 1</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Sumaré</p>
                  </div>
                  <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
