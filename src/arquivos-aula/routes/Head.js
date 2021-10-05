import React from "react";

const Head = (props) => {
    React.useEffect(() => {
        //mudando o nome da aba da página
        document.title = props.title
        //mudando a descrição da página
        document.querySelector('meta[name="description"]').setAttribute('content', props.description)
        console.log(props)
    }, [props]);

  return <>
  </>;
};

export default Head;
