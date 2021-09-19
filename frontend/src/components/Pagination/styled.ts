import styled from "styled-components";

interface ISelect { 
	isSelect?: boolean
}

export const Container = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 10px;
  color: #ffffff;
  
`;

export const PaginationButton = styled.div`
  display: flex;
  color: #ffffff;
`;

export const PaginationItem = styled.div<ISelect>`
  margin: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.isSelect && {
      background: "#94ff83",
      padding: "0 5px",
      color: "#fff",
    }}
`;