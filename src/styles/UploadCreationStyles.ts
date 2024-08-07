// src/styles/UploadCreationStyles.ts

import styled from 'styled-components';

export const UploadCreationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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