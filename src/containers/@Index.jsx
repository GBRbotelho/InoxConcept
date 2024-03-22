import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Navbar.jsx";
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";
import Container4 from "./Container4.jsx";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </main>
  );
}
