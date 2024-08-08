import styled from 'styled-components';
import { FormWrapper as SharedFormWrapper, Input as SharedInput, SubmitButton as SharedSubmitButton , Select as SharedSelect} from './FormStyles';

export const FormWrapper = styled(SharedFormWrapper)`
  // You can add any additional styles specific to UploadCreation form here
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const IdeaReferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const SubmitButton = styled(SharedSubmitButton)`
  // You can add any additional styles specific to UploadCreation submit button here
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
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

export const Input = styled(SharedInput)`
  // You can add any additional styles specific to UploadCreation input here
`;

export const Select = styled(SharedSelect)`
  // You can add any additional styles specific to UploadCreation input here
`;