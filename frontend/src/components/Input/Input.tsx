import styled from 'styled-components';

export const Input = styled.input`
    background-color: transparent;
    padding: 10px;
    border-bottom: 2px solid rgb(255,255, 255, 0.2);
    color: #fff;

    &::placeholder {
        color: red;
    }
`;