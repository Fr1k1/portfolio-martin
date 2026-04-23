import "./Input.scss";

const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
