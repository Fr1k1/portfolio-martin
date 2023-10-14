import "./Input.scss";

const Input = ({ label, name }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className="input" type="text" name={name} />
    </div>
  );
};

export default Input;
