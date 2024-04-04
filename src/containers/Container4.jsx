import React, { useEffect, useState } from "react";
import styles from "./Container4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Map from "../icons/Obras/Map";
import Metros from "../icons/Obras/Metros";
import Modal from "../components/Modal";

//Imgs
import GreenVille from "../assets/imgs/Obras/GreenVille/greenVille.webp";
import AlphaVille from "../assets/imgs/Obras/AlphaVille/Alphaville.webp";
import CondomínioColinas from "../assets/imgs/Obras/Condomínio Colinas/Condomínio Colinas.webp";
import CondomínioPanini from "../assets/imgs/Obras/Condomínio Panini/Condomínio Panini.webp";
import MontBlanc from "../assets/imgs/Obras/Mont Blanc/Mont Blanc.webp";
import NovaHolanda from "../assets/imgs/Obras/Condomínio Nova Holanda/Condomínio Residencial Nova Holanda.webp";
import Monterrey from "../assets/imgs/Obras/Condomínio Monterrey/Condomínio Monterrey.webp";

//Alphaville
import Alpha1 from "../assets/imgs/Obras/AlphaVille/1.webp";
import Alpha2 from "../assets/imgs/Obras/AlphaVille/2.webp";
import Alpha3 from "../assets/imgs/Obras/AlphaVille/3.webp";

//GreenVille
import Green1 from "../assets/imgs/Obras/GreenVille/1.webp";
import Green2 from "../assets/imgs/Obras/GreenVille/2.webp";
import Green3 from "../assets/imgs/Obras/GreenVille/3.webp";
import Green4 from "../assets/imgs/Obras/GreenVille/4.webp";

//Colinas
import Colinas1 from "../assets/imgs/Obras/Condomínio Colinas/1.webp";
import Colinas2 from "../assets/imgs/Obras/Condomínio Colinas/2.webp";
import Colinas3 from "../assets/imgs/Obras/Condomínio Colinas/3.webp";
import Colinas4 from "../assets/imgs/Obras/Condomínio Colinas/4.webp";

//Monterrey
import Monterrey1 from "../assets/imgs/Obras/Condomínio Monterrey/1.webp";
import Monterrey2 from "../assets/imgs/Obras/Condomínio Monterrey/2.webp";
import Monterrey3 from "../assets/imgs/Obras/Condomínio Monterrey/3.webp";

//NovaHolanda
import NovaHolanda1 from "../assets/imgs/Obras/Condomínio Nova Holanda/1.webp";
import NovaHolanda2 from "../assets/imgs/Obras/Condomínio Nova Holanda/2.webp";
import NovaHolanda3 from "../assets/imgs/Obras/Condomínio Nova Holanda/3.webp";
import NovaHolanda4 from "../assets/imgs/Obras/Condomínio Nova Holanda/4.webp";
import NovaHolanda5 from "../assets/imgs/Obras/Condomínio Nova Holanda/5.webp";

//Panini
import Panini1 from "../assets/imgs/Obras/Condomínio Panini/1.webp";
import Panini2 from "../assets/imgs/Obras/Condomínio Panini/2.webp";
import Panini3 from "../assets/imgs/Obras/Condomínio Panini/3.webp";
import Panini4 from "../assets/imgs/Obras/Condomínio Panini/4.webp";
import Panini5 from "../assets/imgs/Obras/Condomínio Panini/5.webp";

//MontBlanc
import MontBlanc1 from "../assets/imgs/Obras/Mont Blanc/1.webp";
import MontBlanc2 from "../assets/imgs/Obras/Mont Blanc/2.webp";
import MontBlanc3 from "../assets/imgs/Obras/Mont Blanc/3.webp";
import MontBlanc4 from "../assets/imgs/Obras/Mont Blanc/4.webp";

const imagesAlpha = [
  {
    original: Alpha1,
    thumbnail: Alpha1,
  },
  {
    original: Alpha2,
    thumbnail: Alpha2,
  },
  {
    original: Alpha3,
    thumbnail: Alpha3,
  },
];

const imagesMontBlanc = [
  {
    original: MontBlanc1,
    thumbnail: MontBlanc1,
  },
  {
    original: MontBlanc2,
    thumbnail: MontBlanc2,
  },
  {
    original: MontBlanc3,
    thumbnail: MontBlanc3,
  },
  {
    original: MontBlanc4,
    thumbnail: MontBlanc4,
  },
];

const imagesPanini = [
  {
    original: Panini1,
    thumbnail: Panini1,
  },
  {
    original: Panini2,
    thumbnail: Panini2,
  },
  {
    original: Panini3,
    thumbnail: Panini3,
  },
  {
    original: Panini4,
    thumbnail: Panini4,
  },
  {
    original: Panini5,
    thumbnail: Panini5,
  },
];

const imagesNovaHolanda = [
  {
    original: NovaHolanda1,
    thumbnail: NovaHolanda1,
  },
  {
    original: NovaHolanda2,
    thumbnail: NovaHolanda2,
  },
  {
    original: NovaHolanda3,
    thumbnail: NovaHolanda3,
  },
  {
    original: NovaHolanda4,
    thumbnail: NovaHolanda4,
  },
  {
    original: NovaHolanda5,
    thumbnail: NovaHolanda5,
  },
];

const imagesMonterrey = [
  {
    original: Monterrey1,
    thumbnail: Monterrey1,
  },
  {
    original: Monterrey2,
    thumbnail: Monterrey2,
  },
  {
    original: Monterrey3,
    thumbnail: Monterrey3,
  },
];

const imagesColinas = [
  {
    original: Colinas1,
    thumbnail: Colinas1,
  },
  {
    original: Colinas2,
    thumbnail: Colinas2,
  },
  {
    original: Colinas3,
    thumbnail: Colinas3,
  },
  {
    original: Colinas4,
    thumbnail: Colinas4,
  },
];

const imagesGreen = [
  {
    original: Green1,
    thumbnail: Green1,
  },
  {
    original: Green2,
    thumbnail: Green2,
  },
  {
    original: Green3,
    thumbnail: Green3,
  },
  {
    original: Green4,
    thumbnail: Green4,
  },
];

export default function Container4() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([]);

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
                  <button
                    onClick={() => {
                      setImages(imagesGreen);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesAlpha);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesColinas);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesPanini);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesMontBlanc);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesNovaHolanda);
                    }}
                  >
                    Ver mais
                  </button>
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
                  <button
                    onClick={() => {
                      setImages(imagesMonterrey);
                    }}
                  >
                    Ver mais
                  </button>
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
        {images.length > 0 && <Modal images={images} setImages={setImages} />}
      </div>
    </section>
  );
}
