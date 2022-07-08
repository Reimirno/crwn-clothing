import "./form-input.scss";
const FormInput = ({ handleChange, label, ...other }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" onChange={handleChange} {...other} />
      {label ? (
        <label
          className={`${
            other.value.length ? "input-shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
