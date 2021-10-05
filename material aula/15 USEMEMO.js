import React from "react";
/*
  O QUE SERÁ FEITO?
  useMemo e useCallback

  useMemo => recebe um callback que retorna um valor salvo na memoria
  só execu na criacao.

  useCallback => cria uma funcao apenas uma vez
*/

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const t1 = performance.now();
  const [contar, setContar] = React.useState(0);

  //operacao que retorna um valor
  const valor = React.useMemo(() => {
    //pegando o valor armazenado no localstorage
    const localItem = window.localStorage.getItem("produto");
    return localItem;

    //array vazia pra determinar quantas vezes essa funcao deve ser executada
  }, []);

  //acelerqando o cáculo da operacao lenta
  const testeLatencia = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
