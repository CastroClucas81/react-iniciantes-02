import React from "react";
//link serve para nevegar entre as páginas sem atualizar a tela
//o NavLink é utilizado para criar uma classe sobre a página que está ativa no momento
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      {/*
      <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
      */}
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="sobre">Sobre</NavLink> |{" "}
      <NavLink to="login">Login</NavLink>
    </nav>
  );
}
