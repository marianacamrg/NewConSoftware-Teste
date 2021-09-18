import styled, { css } from "styled-components";

interface IStyledISelect {
  inputSize: "default" | "large";
  className?: string
}

export const StyledSelect = styled.select<IStyledISelect>`
  width: 14%;
  height: 42px;
  border: unset;
  border-radius: 8px;
  font-size: 16px;
  /* background-color: #000; */

  
  padding: 0 25px;
  margin-bottom: 20px;
  border: 1px solid #ccc;

  &:focus,
  &:active {
    border: 0.1rem solid #000;
  }

  option {
    color: #000;
  }

  ${(props) =>
  props.className === 'displayErrors' &&
  css`
    border: 2px solid #eb202b;
  `}
`;
