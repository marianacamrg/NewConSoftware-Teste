import styled from "styled-components";

export const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	padding: 20px;
`;

export const Header = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
	> h1 {
		text-transform: uppercase;
		color: #fff;
	}
	> h5 {
		text-transform: uppercase;
		color: #fff;
		
	}
`;

export const Form = styled.form `
	> div, span {
		margin-bottom: 20px;
	}
`;

export const ButtonWrapper = styled.div `
	display: flex;
	justify-content: space-between;
`;
