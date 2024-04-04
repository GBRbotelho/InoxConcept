import React, { useEffect, useState } from "react";
import styles from "./Container4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Map from "../icons/Obras/Map";
import Metros from "../icons/Obras/Metros";

//Imgs
import GreenVille from "../assets/imgs/Obras/GreenVille/greenVille.webp";
import AlphaVille from "../assets/imgs/Obras/AlphaVille/Alphaville.webp";
import CondomínioColinas from "../assets/imgs/Obras/Condomínio Colinas/Condomínio Colinas.webp";
import CondomínioPanini from "../assets/imgs/Obras/Condomínio Panini/Condomínio Panini.webp";
import MontBlanc from "../assets/imgs/Obras/Mont Blanc/Mont Blanc.webp";
import NovaHolanda from "../assets/imgs/Obras/Condomínio Nova Holanda/Condomínio Residencial Nova Holanda.webp";
import Monterrey from "../assets/imgs/Obras/Condomínio Monterrey/Condomínio Monterrey.webp";

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
          Projetos <span>Concluídos</span>
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
                <div className={styles.img}>
                  <img src={GreenVille} alt="Obra GreenVille" />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Condomínio Green Ville</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Paulinia</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img src={AlphaVille} alt="Obra Alphaville Dom Pedro 3" />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Alphaville Dom Pedro 3</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Campinas</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img
                    src={CondomínioColinas}
                    alt="Obra Condomínio Colinas de São Pedro"
                  />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Colinas de São Pedro</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Pedreira</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img src={CondomínioPanini} alt="Obra Condomínio Panini" />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Condomínio Panini</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Jaguariuna</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img src={MontBlanc} alt="Obra Condomínio Mont Blanc" />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Condomínio Mont Blanc</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Campinas</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img
                    src={NovaHolanda}
                    alt="Obra Condomínio Residencial Nova Holanda"
                  />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Condomínio Nova Holanda</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Holambra</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img src={Monterrey} alt="Obra Condomínio Monterrey" />
                </div>
                <div className={styles.subtitleCard}>
                  <span>Condomínio Monterrey</span>
                  <button>Ver mais</button>
                </div>
                <div className={styles.dataCard}>
                  <div className={styles.geo}>
                    <Map />
                    <p>Monte Mor</p>
                  </div>
                  {/* <div className={styles.metric}>
                    <p>10.000</p>
                    <Metros />
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
