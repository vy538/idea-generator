// src/styles/AddIdeaStyles.ts

import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 1rem;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;