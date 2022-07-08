import "./general-button.scss";

const GeneralButton = ({ children, ...other }) => {
  return (
    <button className={`general-button ${other.extraclass}`} {...other}>
      {children}
    </button>
  );
};

export default GeneralButton;
