import React from "react";

const titulo = "esse é um titulo";

/*
  O QUE SERÁ FEITO?
  TRATAMENTO DE ARRAYS

  ATIVIDADE:
  Organize os produtos como mostrado no vídeo
  Mostre apenas produtos que forem mais caros que R$ 1500
*/

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  //REMOVENDO R$ DO PRECO COM O REPLACE para poder verificar se ele é maior q 1500
  //CONVERTENDO EM NUMBER COM O Number()
  return (
    <>
      {produtos
        .filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
        .map(({ nome, preco, id, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preco: {preco}</p>
            <ul>
              {cores.map((cor) => (
                <li key={cor} style={{ background: cor, color: "white" }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default App;
