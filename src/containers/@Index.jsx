import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Navbar";
import Container1 from "./Container1";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
    </main>
  );
}
