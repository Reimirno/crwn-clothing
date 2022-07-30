import styled, { css } from "styled-components";

const regularButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    background-color: #fbbc05;
    color: black;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.google) {
    return googleSignInButtonStyles;
  } else if (props.inverted) {
    return invertedButtonStyles;
  } else {
    return regularButtonStyles;
  }
};

export const GeneralStyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  font-family: "Encode Sans Condensed", sans-serif;
  font-size: 15px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${getButtonStyles}
`;
