import styled from "styled-components";
import { variant } from "styled-system";


type ButtonProps = {
    variant?: string
}


export const Button = styled.button<ButtonProps>`
padding: 10px 20px;
cursor: pointer;


${variant({
    variants:{
        default: {
        backgroundColor: '#8dc38b',
        color: '#1d1d1d',
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
        fontWeight: 'bold',
        },
        primary: {
        padding: '10px 70px',
        borderRadius:'4px',
        backgroundColor: '#fff',
        boxShaddow: 'opx 4px 4px rgba(0, 0, 0, 0.05)',
        },
    }
})}
`;

Button.defaultProps = {
    variant: 'default',
}