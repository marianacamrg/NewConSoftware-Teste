import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';


type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
    background-color: transparent;
    padding: 10px;
    border-bottom: 2px solid rgb(141, 195, 139);
    color: #94ff83;

    &::placeholder {
        color: #8dc38b;
    }

${flex}

`;