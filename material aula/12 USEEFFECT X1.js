import React from "react";
import Produto from "./Produto";

/*
  O QUE SERÁ FEITO?
  useEffect - TODO O COMPONENTE POSSUI UM CICLO DE VIDA;
  OS PRINCIPAIS MOMENTOS ACONTECEM QUANDO O COMPONENTES É RENDERIADO, ATUALIZADO OU DESTRUIDO

  PODEMOS DEFINIR UM CALLBACK QUE IRÁ SER EXECUTADO DURANTE CERTOS MOMENTOS DO CICLO DE
  VIDA DO COMPONENTE.

  TODO COMPONENTE POSSUI UM CICLO DE VIDA

  TEM COMO DEFINIR UM EFEITO QUANDO UM COMPONENTE É CRIADO (POR EXEMPLO)

  USABILIDADE: QUANDO VC SÓ QUER PUXAR OS DADOS DE UM SERVIDOR UMA VEZ

  POSSO TER QUANTOS EFEITOS EU QUISER
*/

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  // UM COMPONENTE É COMO UMA FUNÇÃO, TODA VEZ Q O STATE MUDAR ELE SERÁ RENDERIZADO
  // O USEEFFECT PERMITE Q UMA FUNÇÃO ESPECÍFICA NÃO SEJA EXECUTADA novamente
  React.useEffect(() => {
    console.log("executou");
  }, []);

  /*
    SIGNIFICA DIZER QUE O EFEITO VAI MUDAR SEMPRE QUE O STATE MUDAR

    ELE NOTIFICA UM ERRO SE NÃO TIVER NO EFEITO O ESTADO PASSADO, PQ O ESTADO VAI MUDAR
    MAS O EFEITO NAO. NOUTRAS PALAVRAS, TER SEMPRE COMO DEPENDENCIA A MUDANCA DO ESTADO

  */
  React.useEffect(() => {
    document.title = contar;
  }, [contar]);

  React.useEffect(() => {
    //then recebe a resposta
    //convertendo a resposta em json pelo then x1
    //passando os dados json para setDados em then x2
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      {contar}
      <br />
      {dados && (
        <div>
          <h4>{dados.nome}</h4>
          <p>R$ {dados.preco}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>contar</button>
      <br />

      {ativo && <Produto />}

      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  );
};

export default App;
