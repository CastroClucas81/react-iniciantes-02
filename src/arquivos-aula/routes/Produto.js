import React from "react";
import {useParams, NavLink, Outlet } from "react-router-dom";

export default function Produto() {
  //pegando o nome do parâmetro enviado lá nas rotas
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>Produto: {params.id}</h1>
      <nav>
        {/* São basicamente rotas internas... O objetivo é navegar entre essas rotas na mesma página */}
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliacao</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>

      {/* Refere-se as rotas aninhadas lá do app*/}
      <Outlet />
    </>
  );
}
