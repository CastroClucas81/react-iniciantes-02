import React from "react";

const titulo = "esse é um titulo";

/*
  O QUE SERÁ FEITO?
  TRATAMENTO DE ARRAYS

  MOSTRE OS DADOS DA APLICAÇÃO, COMO APRESENTADO NO VÍDEO
  NÃO UTILIZE CSS EXTERNO, USO O STYLE PARA MUDAR AS CORES
  SE A SITUACAO ESTIVER ATIVA PINTE DE VERDE, INATIVA DE VERMELHO
  SE O GASTO FOR MAIOR QUE 10000 MOSTRE UMA MENSAGEM
*/

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3001" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3000" },
  ],
  ativa: false,
};

//dados do cliente
const dados = luana;

//pegando a string do preco (map)
//removendo o R$ (replace)
//convertendo a string em numero (Number)
//somando os valores de dentro do array (reduce)
const precoTotal = dados.compras
  .map((compra) => Number(compra.preco.replace("R$ ", "")))
  .reduce((a, b) => a + b);

const App = () => {
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>
        Situacao:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? " Ativo" : " Inativo"}
        </span>
      </p>
      <p>Total: R$ {precoTotal}</p>
     {precoTotal > 10000 &&  <p>Voce esta gastando muito</p>}
    </>
  );
};

export default App;
