import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Navbar.jsx";
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";
import Container4 from "./Container4.jsx";
import Container5 from "./Container5.jsx";

export default function Index() {
  var href =
    "https://wa.me/5519994735471?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21";

  return (
    <main className={styles.main}>
      <Navbar href={href} />
      <Container1 href={href} />
      <Container2 href={href} />
      <Container3 href={href} />
      <Container4 href={href} />
      <Container5 href={href} />
    </main>
  );
}
