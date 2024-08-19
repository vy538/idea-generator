import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Body } from '../styles/Typography';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${({ theme }) => theme.colors.primaryAccent};
  border-top: 4px solid ${({ theme }) => theme.colors.darkPrimaryAccent};
  border-radius: 50%;
  animation: ${spin} 1.2s ease-in-out infinite;
`;

const LoadingText = styled(Body)`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

interface LoadingSpinnerProps {
  loadingText?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loadingText = 'Loading...' }) => {
  return (
    <SpinnerWrapper>
      <Spinner />
      <LoadingText lang="en">{loadingText}</LoadingText>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;