import React from "react";

import useLocalStorage from "./useLocalStorage";

/*
  O QUE SERÁ FEITO?
  Criar o próprio hook

  a funcao deve começar com o "use"
  ex useNomeDoHOOk

  CRIAR UM HOOK Q TODA VEZ Q FOR SALVO ELE VAI PRO LOCALSTORAGE
*/

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Produto preferido: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smarthphone</button>
    </>
  );
};

export default App;
