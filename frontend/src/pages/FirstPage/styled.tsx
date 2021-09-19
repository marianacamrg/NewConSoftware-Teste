import styled from "styled-components";

export const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	padding: 20px;
	background-color: #1d1d1d;
	> h2{
		color: #fff;
		margin-top: 10%;
		margin-bottom: 1%;
		font-size: 60px;
		margin-left: 1%;
	}
	> h4{
		color: #fff;
		font-weight: 200;
		font-size: 30px;
		margin-bottom: 8%;
		margin-left: 1%;
	} 
	.Resultado{
		text-decoration: none;
		color: #8dc38b;
		font-size: 10px;
	}
`;

export const Header = styled.div`
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  	margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};


	> h1 {
		text-transform: uppercase;
		text-decoration: none;
		color: #94ff83;
	}
	> a {
		display:inline-block;
		text-decoration: none;
		font-weight: 1000;
		color: #1d1d1d;
		font-size: 18px;
		border: 3px solid #fff;
		border-radius: 8px;
		padding: 6px 20px;
		margin-right: 5%;
	}
	.logo {
		margin-left: 1%;
		margin-top: 1%;
		margin-bottom: 1%;
		margin-right: 1%;
	}
`;

export const InputContainer = styled.div`
  > input {
		display: flex;
		height: 42px;
		border: 3px solid #94ff83;
		border-radius: 8px;
		width: 100%;
		margin-bottom: 2%;
		padding: 0 10px;
		font-size: 16px;
	}
`;
