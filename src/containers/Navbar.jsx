import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";

import Logo from "../assets/imgs/Logo.png";

export default function Navbar({ href }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Limita o desaparecimento da barra de navegação após rolar 120px
    const scrollThreshold = 100;

    if (currentScrollPos < scrollThreshold) {
      setVisible(true); // Mantém a barra de navegação visível
    } else {
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false); // Fechar o dropdown após clicar em um item
    }
  };

  return (
    <header className={`${styles.header} ${visible ? "" : styles.hidden}`}>
      <div className={styles.divLogo} data-aos="fade-down">
        <img src={Logo} alt="Logo" />
      </div>
      <nav data-aos="fade-down">
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("produtos")}>Produtos</li>
          <li onClick={() => scrollToSection("obras")}>Projetos</li>
          <li onClick={() => scrollToSection("contato")}>Contato</li>
        </ul>
      </nav>
      <div className={styles.divButton} data-aos="fade-down">
        <a href={href}>
          <button>Orçamento</button>
        </a>
      </div>
      <div
        className={styles.menuHamburger}
        onClick={toggleDropdown}
        data-aos="fade-down"
      >
        {isDropdownOpen ? <Close /> : <Hamburger />}
      </div>
      <div
        className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("produtos")}>Produtos</li>
          <li onClick={() => scrollToSection("obras")}>Obras</li>
          <li onClick={() => scrollToSection("contato")}>Contato</li>
          <li className={styles.button}>
            <a href={href}>
              <button>Orçamento</button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
