import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

/*
  O QUE SERÁ FEITO?
  DESAFIO DOS COMPONENTES

  - Replique a interface como a apresentada na aula
  - Utilize a array abaixo para mostrar os produtos
  - Quebre em componentes o que precisar ser reutilizado
  - Dica: const { pathname } = window.location; (puxa o caminho do URL)


  ARQUIVOS UTILIZADOS: HEADER, HOME, PRODUTO, PRODUTOS
*/

const App = () => {
  //DEFININDO UM COMPONENTE PÁGINA
  //ELE TERÁ OS COMPONENTES DA HOME OU PRODUTOS
  let Pagina = Home;

  //pathname é o nome do caminho do arquivo
  const { pathname } = window.location;

  //IF PARA ROTA
  if (pathname === "/produtos") Pagina = Produtos;
  else Pagina = Home;

    return (
      <>
        <Header />
        <Pagina />
      </>
    );
};

export default App;
