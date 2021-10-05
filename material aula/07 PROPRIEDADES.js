import React from "react";
import Form from "./Form/Form";

/*
  O QUE SERÁ FEITO?
  PROPRIEDADES - PARAMETROS PASSADOS AOS COMPONENTES

  O NOME DA PROP TEM Q SER EXATAMENTE O QUE SERÁ USANDO NO OUTRO COMPONENTE

  ex.:
   const Component = (props) OU Component = ({parametro1, parametro2})

   CHILDREN: é o innerText DE UM COMPONENTE QUE ABRE E FECHA
   TU PODE COLOCAR QUALQUER COISA
   ex.: <Component> esseTextoEoChilden </Component>

   TU PODE PASSAR O ...props (REST) também, pois as vezes vc só quer inserir os campos
   ex.: eu quero passar um required, mas não quero que todos os inputs tenham ele
   passo o required e lá no componente: ...props
*/

const Titulo = ({ cor, texto, children }) => {
  return (
    <h4 style={{ color: cor }}>
      {texto}, {children}
    </h4>
  );
};

const App = () => {
  return (
    <>
      <Form />
      <Titulo cor="red" texto="parametro passado">
        isso e o children
      </Titulo>
      <Titulo cor="blue" texto="parametro passado" />
      <Titulo cor="yellow" texto="parametro passado" />
    </>
  );
};

export default App;
