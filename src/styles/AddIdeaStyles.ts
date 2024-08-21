import styled from 'styled-components';
import { FormWrapper as SharedFormWrapper, Input, Select, SubmitButton as SharedSubmitButton } from './FormStyles';

export const FormWrapper = styled(SharedFormWrapper)`
  // You can add any additional styles specific to AddIdea form here
`;

export const StyledInput = styled(Input)`
  // You can add any additional styles specific to AddIdea input here
`;

export const StyledSelect = styled(Select)`
  // You can add any additional styles specific to AddIdea select here
`;

export const SubmitButton = styled(SharedSubmitButton)`
  // You can add any additional styles specific to AddIdea submit button here
`;


export const TranslationPreview = styled.div`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-style: italic;
  min-height: 2.5rem;
`;