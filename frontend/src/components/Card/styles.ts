import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.15);
  display: flex;
  padding: 15px;
  align-items: flex-start;
  margin-bottom: 12px;
  background-color: #fff;


`;

export const Content = styled.div`
  > h1 {
    font-size: 16px;
    color: #000;
    margin-bottom: 8px;
    
  }

  > span {  
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-shadow: 1px 2px #94ff83;
  }

  > button {
    border-radius: 8px;
    background: none;
    cursor: pointer;
    border: 1px solid #000;
    padding: 8px;
    font-weight: bold;
  }
`;