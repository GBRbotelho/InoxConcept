import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Navbar";
import Container1 from "./Container1";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Container1 />
    </main>
  );
}
