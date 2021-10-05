import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  //fazendo a funcao ser criada apenas uma vez
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      //definir tela carregando
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError("erro");
      //finally significa q sempre vai ocorrers
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, [])

  //retornando como objeto
  return { data, error, loading, request };
};

export default useFetch;
