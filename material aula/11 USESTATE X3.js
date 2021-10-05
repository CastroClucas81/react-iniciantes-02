import React from "react";
import Produto from "./arquivos-aula/use state x3/Produto";

/*
  O QUE SERÁ FEITO?
  HOOKS - useState, REATIVIDADE

  Os links abaixo puxam dados de um produto em formato JSON
  https://ranekapi.origamid.dev/json/api/produto/tablet
  https://ranekapi.origamid.dev/json/api/produto/smartphone
  https://ranekapi.origamid.dev/json/api/produto/notebook
  Crie uma interface com 3 botões, um para cada produto.
  Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  Mostre apenas um produto por vez
  Mostre a mensagem carregando... enquanto o fetch é realizado

  RESUMO
  CARREGAR DADOS POR API COM O FETCH E ENQUANTO N CARREGAR MOSTRAR A MENSAGEM
  "...CARREGANDO"
*/

const App = () => {
  //puxar dados q podem ser alterados é um HOOK
  //inicialmente, nao há dados... eles serão carregados
  const [dados, setDados] = React.useState(null);

  //pra poder exibir o input carregando
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(e) {
    setCarregando(true);
    //pelo o q eu entendi, o fetch busca. o then traz a resposta
    //await espera o código ser executado para executado para executar o outro
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + e.target.innerText
    );

     //convertendo em json
     const json = await response.json();
     
     //passando os dados convertidos para dados
     setDados(json)
     setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <br />
      <button onClick={handleClick}>smartphone</button>
      <br />
      <button onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
