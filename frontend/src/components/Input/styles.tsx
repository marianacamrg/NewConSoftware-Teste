import styled, { css } from "styled-components";

interface IStyledInput {
  inputSize: "default" | "large";
  className?: string;
}

export const StyledInput = styled.input<IStyledInput>`
  width: 100%;
  height: 42px;
  border: unset;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;

  &:focus,
  &:active {
    border: 0.1rem solid #0e0e0e;
  }

  ${(props) =>
    props.inputSize === "large" &&
    css`
      height: 6rem;
      font-size: 16px;
      flex-wrap: wrap;
    `}

  ${(props) =>
  props.className === 'displayErrors' &&
  css`
    border: 2px solid #FF0000;
    margin-bottom: 0;
  `}
`;

