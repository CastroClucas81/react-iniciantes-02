import React from "react";
import Product from "./Product";
//importando um contexto global
import {GlobalStorage} from './GlobalContexto';


/*
  O QUE SERÁ FEITO?
  createContext => forma de criar um estado, dado de forma global
  exemplo: capturar o id/nome do usuário pra todo o site

  /o contexto deve ser usado na parte mais global do sistema

  possui dois métodos Consumer e provider
  provider => vai prover o global pra todos os filhos
*/

const App = () => {
  //DEVO CIRCULAR TODOS OS COMPONENTES COM COMPONENTE DO GLOBALSTORAGE...
  //ESSE COMPONENTE RECEBE OUTROS COPONENTES COMO PARÂMETRO...
  return (
    <GlobalStorage>
        <Product />
    </GlobalStorage>
  );
};

export default App;
