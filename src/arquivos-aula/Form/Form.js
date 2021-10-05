import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  //suponha que eu queira passar um array pelo botao
  const array = ['item 1', 'item 2'];

  return (
    <form>
      <p>
        <Input id="nome" label="Nome" type="text" required />
      </p>

      <p>
        <Input id="email" label="Email" type="email" />
      </p>

      <Button items={array} />
    </form>
  );
};

export default Form;
