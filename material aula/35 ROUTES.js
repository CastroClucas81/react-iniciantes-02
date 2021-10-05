import React from "react";
//o browserrouter envolve todo o componente q vai envolver rotas
//Routes são apenas as rotas específicas... ex: o header fica do lado de fora do routes
//Route refere-se ao componente em específico
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Produto from "./routes/Produto";
import Sobre from "./routes/Sobre";
import ProdutoDescricao from "./routes/ProdutoDescricao";
import ProdutoAvaliacao from "./routes/ProdutoAvaliacao";
import ProdutoCustomizado from "./routes/ProdutoCustomizado";

const App = () => {
  return (
    <BrowserRouter>
      {/*Aqui ficaria o header*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        {/*
          Rota dinâmica... utilizamos o useParams
          A segundo /* após o :id é utilizada para o nestedRoutes
        */}
        <Route path="produto/:id/*" element={<Produto />}>
          {/* / pq refere-se a pagina atual */}
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        {/*Refere-se a pagina 404*/}
        <Route path="*" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
