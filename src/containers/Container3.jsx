import React, { useState } from "react";
import styles from "./Container3.module.css";
import Icon1 from "../icons/Servicos/Icon1";
import Icon2 from "../icons/Servicos/Icon2";
import Icon3 from "../icons/Servicos/Icon3";

export default function Container3() {
  const [option, setOption] = useState("option1");

  const handleClick = (e) => {
    const { id } = e.target;
    setOption(id);
  };

  return (
    <section className={styles.section} id="produtos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nossos <span>Serviços</span>
        </h2>
        <ul>
          <li
            id="option1"
            className={option === "option1" ? styles.active : ""}
            onClick={handleClick}
          >
            Galpão 1
          </li>
          <li
            id="option2"
            className={option === "option2" ? styles.active : ""}
            onClick={handleClick}
          >
            Galpão 2
          </li>
        </ul>
        {option === "option1" && (
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
                industrial 1
              </h2>
              <p>
                Numa pequena cidade à beira-mar, o tempo parecia parar. As ruas
                estreitas, adornadas por casas coloridas de estilo colonial,
                serpenteavam em direção ao oceano, onde as ondas quebravam
                suavemente na costa.
                <br />
                Os habitantes, em sua maioria pescadores e artesãos, viviam em
                harmonia com a natureza e as tradições que passavam de geração
                em geração.
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
              <button>Fazer orçamento</button>
            </div>
          </div>
        )}
        {option === "option2" && (
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
                industrial 2
              </h2>
              <p>
                Numa pequena cidade à beira-mar, o tempo parecia parar. As ruas
                estreitas, adornadas por casas coloridas de estilo colonial,
                serpenteavam em direção ao oceano, onde as ondas quebravam
                suavemente na costa.
                <br />
                Os habitantes, em sua maioria pescadores e artesãos, viviam em
                harmonia com a natureza e as tradições que passavam de geração
                em geração.
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
              <button>Fazer orçamento</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
