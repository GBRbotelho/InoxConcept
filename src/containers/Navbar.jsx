import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.divLogo}>Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Obras</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className={styles.divButton}>
        <button>Orçamento</button>
      </div>
    </header>
  );
}
