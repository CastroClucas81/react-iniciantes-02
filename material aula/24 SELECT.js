import React from "react";

/*
  O QUE SERÁ FEITO?
  SELECT
*/

const App = () => {
  const [select, setSelect] = React.useState("tablet");
  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
