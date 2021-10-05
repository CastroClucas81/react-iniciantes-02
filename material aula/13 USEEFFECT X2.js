import React from "react";
import Produto from "./Produto";
/*
  O QUE SERÁ FEITO?
  useEffect - TODO O COMPONENTE POSSUI UM CICLO DE VIDA;
  
  Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  https://ranekapi.origamid.dev/json/api/produto/notebook
  https://ranekapi.origamid.dev/json/api/produto/smartphone
  Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  Defina o produto clicado como uma preferência do usuário no localStorage
  Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  local storagem: f12, application, STORAGE
*/

const App = () => {
  //o produto vai recer o nome do conteúdo dos botões
  const [produto, setProduto] = React.useState(null);

  //efeito q só vai acontecer uma vez, quando a página inicia
  React.useEffect(() => {
    //vai lá no localStorage e pegue o item com a chave 'produto
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) {
      setProduto(produtoLocal);
    }
  }, []);

  //sempre que o produto for modificado, quero que esse evento ocorra
  React.useEffect(() => {
    //o localstorage só será definido se produto for != null
    if (produto !== null) {
      //'produto' é o valor da minha chate em localstorage
      window.localStorage.setItem("produto", produto);
    }
  }, [produto]);

  function handleClick(e) {
    setProduto(e.target.innerText);
  }

  return (
    <>
      <h3>Preferencia: {produto}</h3>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </>
  );
};

export default App;
