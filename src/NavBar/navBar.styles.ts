import styled from "@emotion/styled";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 12%;
  height: 100vh;
  background-color: #e5e5e5;
  border: 1px solid #a9a9a9;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #c2c2c2;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 10px 0;
  width: auto;
  flex-wrap: wrap;

  img {
    margin: 0 10px 0 0;
  }
`;
