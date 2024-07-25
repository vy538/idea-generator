import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  width: 150px;
  height: 150px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;