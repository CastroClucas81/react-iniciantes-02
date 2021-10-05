import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  //estado reativo para o fetch
  const [produto, setProduto] = React.useState(null);

  //criando estado de loading (enquanto carrega os dados)
  const [loading, setLoading] = React.useState(false);

  //criando estado de error
  const [error, setError] = React.useState(null);

  //useParams para pegar a informação enviada pela rota dinâmica
  const { id } = useParams();

  //pegando os dados daquele produto
  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);

        const response = await fetch(url);

        //convertendo para json
        const json = await response.json();

        //setando o json no estado reativo
        setProduto(json);
      } catch (err) {
        setError("um error ocorreu.");
        //independente do q acontecer, esse evento ocorrerá
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head title={`site | ${produto.nome}`} />

      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
