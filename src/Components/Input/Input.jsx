import "./Input.scss";
import { PropTypes } from "prop-types";

const Input = ({ label, name, onChange }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className="input" type="text" name={name} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
