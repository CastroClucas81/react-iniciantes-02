import React from "react";

/*
  O QUE SERÁ FEITO?
  TEXTAREA
*/

const App = () => {
  const [textarea, setTextarea] = React.useState("");
  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
    </form>
  );
};

export default App;
