import { StyledButton } from "./styles";


type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    size?: "default" | "small";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
    label = "",
    variant = "primary",
    size = "default",
    onClick,
    type,
  }) => {
    return (
      <StyledButton type={type} onClick={onClick} variant={variant} size={size}>
        <span>{label}</span>
      </StyledButton>
    );
  };

  export default Button;


// export const Button = styled.button<ButtonProps>`
// padding: 10px 20px;
// cursor: pointer;
// ${variant({
//     variants:{
//         default: {
//         backgroundColor: '#8dc38b',
//         color: '#1d1d1d',
//         borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
//         fontWeight: 'bold',
//         },
//         primary: {
//         padding: '10px 70px',
//         borderRadius:'4px',
//         backgroundColor: '#fff',
//         boxShaddow: 'opx 4px 4px rgba(0, 0, 0, 0.05)',
//         },
//     }
// })}
// `;
