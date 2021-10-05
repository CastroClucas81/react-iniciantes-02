import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </>
  );
};

export default Input;
