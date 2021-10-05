import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = (props) => {
  return (
    <>
      <Titulo titulo="produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </>
  );
};

export default Produtos;
