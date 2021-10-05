import React from "react";

const titulo = "esse é um titulo";

const App = () => {
  const nome = "lucas";

  //suponha funcao verificar se alto está ativo ou nao
  const ativo = true;

  //no return, funcao deve sempre ser ativada para funcionar
  function mostrarNome(sobrenome) {
    return "lucas " + sobrenome;
  }

  //posso passar um objeto tb
  const carro = {
    marca: "Ford",
    modelo: "gt-40",
  };

  const style = {
    color: "blue",
    fontFamily: "Arial",
  };

  return (
    <>
      <h1 style={style}>{titulo}</h1>
      <h2>{mostrarNome("Cardoso")}</h2>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? "ativo" : "inativo"}>{nome}</p> meu app
    </>
  );
};

export default App;
