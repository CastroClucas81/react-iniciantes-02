import React from 'react'

const Produto = ({dados}) => {
    return (
        <>
            <h1>{dados.nome}</h1>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
            <p>R$ {dados.preco}</p>
        </>
    )
}

export default Produto
