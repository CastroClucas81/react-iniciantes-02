import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

/*
  O QUE SERÁ FEITO?
  COMPONENTES - DIVIDIR O APLICATIVO EM PEQUENOS PEDACOS PARA FACILITAR A MANUTENCAO
  
  SEMPRE DEVE RETORNAR ALGO... RETORNE NULL SE PRECISAR

  O RESTANTE DO MATERIAL REFERENTE A ESTE ARQUIVO ESTÁ NA PASTA FORM
*/

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
