import React from "react";

import useFetch from "./useFetch";

/*
  O QUE SERÁ FEITO?
  Criar o próprio hook

  a funcao deve começar com o "use"
  ex useNomeDoHOOk

  CRIAR UM HOOK Q TODA VEZ Q FOR SALVO ELE VAI PRO LOCALSTORAGE
*/

const App = () => {
  const { request, data, loading, error } = useFetch();

  //request assim q o meu componente montar
  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
    }

    fetchData();
  }, [request]);

  //caso tenha um erro
  if (error) return <p>{error}</p>;
  //tela de loading
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </>
    );
  else return null;
};

export default App;
