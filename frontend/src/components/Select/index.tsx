import React from "react";

import { StyledSelect } from "./styles";

interface IMySelectProps {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options?: { value: string | number; description: string }[];
  placeholder?: string;
  name?: string;
  size?: "default" | "large";
  className?: string;
}

const Select: React.FC<IMySelectProps> = ({
  placeholder = "",
  size = "default",
  value = "",
  options,
  onChange,
  name,
  className,
}) => {
  return (
    <StyledSelect
      name={name}
      className={className}
      placeholder={placeholder}
      inputSize={size}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.description}
        </option>
      ))}
      ;
    </StyledSelect>
  );
};

export default Select;
