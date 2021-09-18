import React from "react";

import { StyledInput } from "./styles";

interface IMyInputProps {
  placeholder?: string;
  size?: "default" | "large" | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  className?: string;
}

const Input: React.FC<IMyInputProps> = ({
  placeholder = "",
  size = "default",
  value,
  name,
  onChange,
  className,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      inputSize={size}
      value={value}
      onChange={onChange}
      name={name}
      className={className}
    />
  );
};

export default Input;
// export const Input = styled.input<InputProps>`
//     background-color: transparent;
//     padding: 10px;
//     border-bottom: 2px solid rgb(141, 195, 139);
//     color: #94ff83;

//     &::placeholder {
//         color: #8dc38b;
//     }

// ${flex}

// `;




