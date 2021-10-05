import React from "react";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  erro,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {erro && <p>{erro}</p>}
    </>
  );
};

export default Input;
