import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin: 8px;
`;

interface ButtonProps {
    small?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: #ffde91;
  color: #2c1338;
  height: ${props => props.small ? '32px' : '52px'};
  padding: ${props => props.small ? '8px 12px' : '14px 25px'};
  font-size: 1rem;
  border-radius: 26px;
  border: 0;
  transition: background-color 150ms linear, color 150ms linear;

  &:hover {
    background-color: #564260;
    color: #fff;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;
