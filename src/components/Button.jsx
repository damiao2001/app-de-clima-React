import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(90deg, #2575fc, #6a11cb);
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #6a11cb, #2575fc);
  }
`;

export default function Button({ onClick, disabled, children }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
