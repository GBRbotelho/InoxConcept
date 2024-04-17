import React, { useState } from "react";
import styles from "./Container3.module.css";
import Icon1 from "../icons/Servicos/Icon1";
import Icon2 from "../icons/Servicos/Icon2";
import Icon3 from "../icons/Servicos/Icon3";

//Imgs
import gcinox1 from "../assets/imgs/Servicos/gc inox/1.webp";
import gcinox2 from "../assets/imgs/Servicos/gc inox/2.webp";
import gcinox3 from "../assets/imgs/Servicos/gc inox/3.webp";

import cinox1 from "../assets/imgs/Servicos/c inox/1.webp";
import cinox2 from "../assets/imgs/Servicos/c inox/2.webp";
import cinox3 from "../assets/imgs/Servicos/c inox/3.webp";

import gcvidro1 from "../assets/imgs/Servicos/gc vidro/1.webp";
import gcvidro2 from "../assets/imgs/Servicos/gc vidro/2.webp";
import gcvidro3 from "../assets/imgs/Servicos/gc vidro/3.webp";

export default function Container3({ href }) {
  const [option, setOption] = useState("option1");

  const handleClick = (e) => {
    const { id } = e.target;
    setOption(id);
  };

  return (
    <section className={styles.section} id="produtos">
      <div className={styles.container}>
        <h2 data-aos="zoom-in-up" className={styles.title}>
          Nossos <span>Serviços</span>
        </h2>
        <ul data-aos="zoom-in-up">
          <li
            id="option1"
            className={option === "option1" ? styles.active : ""}
            onClick={handleClick}
          >
            Guarda Corpo de Vidro
          </li>
          <li
            id="option2"
            className={option === "option2" ? styles.active : ""}
            onClick={handleClick}
          >
            Guarda Corpo em Inox
          </li>
          <li
            id="option3"
            className={option === "option3" ? styles.active : ""}
            onClick={handleClick}
          >
            Corrimão em Inox
          </li>
        </ul>
        {option === "option1" && (
          <div className={styles.content} data-aos="zoom-in-up">
            <div className={styles.imgs}>
              <div className={styles.imgs1}>
                <div className={styles.img1}>
                  <img src={gcvidro2} alt="Imagem em vidro" />
                </div>
                <div className={styles.img2}>
                  <img src={gcvidro1} alt="Imagem em vidro" />
                </div>
              </div>
              <div className={styles.imgs2}>
                <div className={styles.img3}>
                  <img src={gcvidro3} alt="Imagem em vidro" />
                </div>
                <div className={styles.dataImg}>
                  <h1>+4</h1>
                  <p>de Experiencia</p>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <h2>Guarda Corpo de Vidro</h2>
              <p>
                Imagine uma vista deslumbrante, capturada em cada detalhe do seu
                espaço. Nosso serviço de guarda corpo em vidro para clientes de
                alto padrão e construtoras oferece não apenas segurança, mas uma
                experiência visual incomparável. <br /> Com designs exclusivos e
                materiais de primeira linha, elevamos o conceito de elegância e
                modernidade. Deixe-nos moldar o seu ambiente com transparência e
                sofisticação, onde cada linha e cada brilho refletem o requinte
                que você merece.
              </p>
              <div className={styles.iconsDiv}>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon1 />
                  </div>
                  <p>
                    Qualidade
                    <br />
                    garantida
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon2 />
                  </div>
                  <p>
                    Pagamento
                    <br />
                    simplificado
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon3 />
                  </div>
                  <p>
                    Materias
                    <br />
                    resistentes
                  </p>
                </div>
              </div>
              <a href={href}>
                <button>Fazer orçamento</button>
              </a>
            </div>
          </div>
        )}
        {option === "option2" && (
          <div className={styles.content} data-aos="zoom-in-up">
            <div className={styles.imgs}>
              <div className={styles.imgs1}>
                <div className={styles.img1}>
                  <img src={gcinox1} alt="Imagem em Inox" />
                </div>
                <div className={styles.img2}>
                  <img src={gcinox3} alt="Imagem em Inox" />
                </div>
              </div>
              <div className={styles.imgs2}>
                <div className={styles.img3}>
                  <img src={gcinox2} alt="Imagem em Inox" />
                </div>
                <div className={styles.dataImg}>
                  <h1>+4</h1>
                  <p>de Experiencia</p>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <h2>Guarda Corpo em Inox</h2>
              <p>
                Conheça o novo padrão de luxo e segurança para o seu espaço.
                Nosso serviço de guarda-corpo em inox para clientes exigentes e
                construtoras oferece mais do que uma simples proteção - é um
                conjunto de estilo e sofisticação.
                <br /> Com linhas impecáveis e um acabamento premium, elevamos o
                conceito de elegância. Deixe-nos moldar o seu ambiente com
                precisão e refinamento, onde cada detalhe reflete a excelência
                que você merece.
              </p>
              <div className={styles.iconsDiv}>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon1 />
                  </div>
                  <p>
                    Qualidade
                    <br />
                    garantida
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon2 />
                  </div>
                  <p>
                    Pagamento
                    <br />
                    simplificado
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon3 />
                  </div>
                  <p>
                    Materias
                    <br />
                    resistentes
                  </p>
                </div>
              </div>
              <a href={href}>
                <button>Fazer orçamento</button>
              </a>
            </div>
          </div>
        )}
        {option === "option3" && (
          <div className={styles.content} data-aos="zoom-in-up">
            <div className={styles.imgs}>
              <div className={styles.imgs1}>
                <div className={styles.img1}>
                  <img src={cinox3} alt="Imagem em Inox" />
                </div>
                <div className={styles.img2}>
                  <img src={cinox2} alt="Imagem em Inox" />
                </div>
              </div>
              <div className={styles.imgs2}>
                <div className={styles.img3}>
                  <img src={cinox1} alt="Imagem em Inox" />
                </div>
                <div className={styles.dataImg}>
                  <h1>+4</h1>
                  <p>de Experiencia</p>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <h2>Corrimão em Inox</h2>
              <p>
                Descubra a essência da elegância e da praticidade com nosso
                corrimão em inox. Mais do que uma simples estrutura de suporte a
                fusão perfeita entre funcionalidade e beleza. <br /> Com
                acabamento impecável e durabilidade incomparável, elevamos o
                conceito de elegância moderna. Onde cada linha reflete o padrão
                que você busca para o seu espaço."
              </p>
              <div className={styles.iconsDiv}>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon1 />
                  </div>
                  <p>
                    Qualidade
                    <br />
                    garantida
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon2 />
                  </div>
                  <p>
                    Pagamento
                    <br />
                    simplificado
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <Icon3 />
                  </div>
                  <p>
                    Materias
                    <br />
                    resistentes
                  </p>
                </div>
              </div>
              <a href={href}>
                <button>Fazer orçamento</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
