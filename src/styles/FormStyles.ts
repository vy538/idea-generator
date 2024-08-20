import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: 10px;
    margin: 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fonts.en.weights.medium};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.typography.body.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.darkPrimaryAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
    padding: 0.5rem;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.darkPrimaryAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
    padding: 0.5rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.darkPrimaryAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
    padding: 0.5rem;
    min-height: 80px;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: ${({ theme }) => theme.fonts.en.weights.medium};
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimaryAccent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
    padding: 0.5rem 1rem;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  margin-top: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
  }
`;
