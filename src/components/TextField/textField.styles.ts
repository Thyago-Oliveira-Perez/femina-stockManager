import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  padding: 5px 0;
  border-bottom: 2px solid #7A0000;
  font-size: 18px;
  transition: all 0.3s ease-out;
  &&:focus {
      padding: 5px 10px;
    }
  }
`;
