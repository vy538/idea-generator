import styled from 'styled-components';
import { FormWrapper as SharedFormWrapper, Input as SharedInput, SubmitButton as SharedSubmitButton, Select as SharedSelect } from './FormStyles';

export const FormWrapper = styled(SharedFormWrapper)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 1000px;
  }
`;

export const InnerFormWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1000px;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  
  object-fit: contain;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const SubmitButton = styled(SharedSubmitButton)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const AddReferenceButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;
  margin-bottom: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const SocialMediaInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

export const CategorySelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

export const Input = styled(SharedInput)`
  // You can add any additional styles specific to UploadCreation input here
`;

export const Select = styled(SharedSelect)`
  // You can add any additional styles specific to UploadCreation select here
`;