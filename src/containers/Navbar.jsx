import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";

export default function Navbar() {
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
      <div className={styles.divLogo}>Logo</div>
      <nav>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("produtos")}>Produtos</li>
          <li onClick={() => scrollToSection("obras")}>Obras</li>
          <li onClick={() => scrollToSection("contato")}>Contato</li>
        </ul>
      </nav>
      <div className={styles.divButton}>
        <button>Orçamento</button>
      </div>
      <div className={styles.menuHamburger} onClick={toggleDropdown}>
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
            <a>
              <button>Orçamento</button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
