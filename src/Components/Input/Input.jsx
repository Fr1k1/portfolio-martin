import React from "react";
import "./Input.scss";

const Input = ({ label }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className="input" type="text" />
    </div>
  );
};

export default Input;
