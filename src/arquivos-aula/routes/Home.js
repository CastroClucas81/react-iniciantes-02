import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/*refere-se ao nome da aba do navegador*/}
      <Head title="home" description="essa e a descricao da home" />
      {/* Fazendo uso das rotas dinâmicas */}
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">smartphone</Link>
    </>
  );
}
