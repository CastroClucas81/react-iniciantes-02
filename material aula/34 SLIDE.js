import React from "react";
import Slide from "./slide/Slide";
/*
  O QUE SERÁ FEITO?
  ATIVIDADE DE PERGUNTAS E RESPOSTAS
*/

const App = () => {
  const slides = [
    {
      id: "slide1",
      text: "slide1"
    },
    {
      id: "slide2",
      text: "slide2"
    },
    {
      id: "slide3",
      text: "slide3"
    },
    {
      id: "slide4",
      text: "slide4"
    },
  ]

  return <>
    <Slide slides={slides} />
  </>;
};

export default App;
