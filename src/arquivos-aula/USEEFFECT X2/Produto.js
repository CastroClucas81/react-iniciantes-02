import React from "react";

const Produto = ({ produto }) => {
  //os dados de produto precisam ser reativos
  const [dados, setDados] = React.useState(null);

  //se já tiver uma preferencia, já puxa os dados do fetch
  //o efeito só vai ocorrer quando o produto mudar
  React.useEffect(() => {
    //se tiver alguma preferencia, ele fará o fetch
    if (produto !== null) 
      fetch("https://ranekapi.origamid.dev/json/api/produto/" + produto)
        .then((response) => response.json())
        .then((json) => setDados(json));
    
  }, [produto]);

  if (dados === null) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  );
};

export default Produto;
