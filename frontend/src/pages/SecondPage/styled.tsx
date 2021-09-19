import styled from "styled-components";

export const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	padding: 20px;
	> h1 {
		color: #8dc38b;
		margin-bottom: 5%;
		text-align: center;
	}
`;

export const Header = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
	> h1 {
		text-transform: uppercase;
		color: #fff;
	}
	> h5 {
		text-transform: uppercase;
		color: #fff;
	}

`;

export const Form = styled.form`
	> div, h3, h5 {
		margin-bottom: 10px;
		color: #fff;
		font-size: 20px;
	}
	> span {
		margin-bottom: 8px;
		color: red;
		font-size: 20px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	color: #8dc38b;
`;

