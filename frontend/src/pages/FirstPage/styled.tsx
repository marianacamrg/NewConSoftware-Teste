import styled from "styled-components";

export const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	padding: 20px;
	background-color: #1d1d1d;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
	> h1 {
		text-transform: uppercase;
		color: #94ff83;
	}

	> a {
		text-decoration: none;
		border: 1px solid #94ff83;
		border-radius: 8px;
		padding: 0 80px;
	}
`;

export const InputContainer = styled.div `
  > input {
		display: flex;
		height: 42px;
		border: 1px solid #94ff83;
		border-radius: 8px;
		width: 100%;
		margin-bottom: 20px;
		padding: 0 10px;
		font-size: 16px;
	}
`;


export const Resultado = styled.div `
  > input {
		color: #FFF;
		text-decoration: none;
	}
`;