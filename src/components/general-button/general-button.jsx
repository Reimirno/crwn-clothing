import { GeneralStyledButton } from "./general-button.style";

const GeneralButton = ({ children, ...other }) => {
  return <GeneralStyledButton {...other}>{children}</GeneralStyledButton>;
};

export default GeneralButton;
