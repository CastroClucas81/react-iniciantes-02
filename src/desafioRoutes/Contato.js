import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";
const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="contato" />
      <img src={foto} />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>sky.lucas2013@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
