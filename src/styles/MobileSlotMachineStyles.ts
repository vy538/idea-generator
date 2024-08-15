import styled, { keyframes } from 'styled-components';

export const MobileSlotMachineWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap:  wrap;
  max-width: 640px;
`;

const refreshAnimation = keyframes`
  0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(40%);
  }
  100% {
    filter: brightness(100%);
  }
`;

export const CategoryCard = styled.div<{ index: number }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 4px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 8px;
  margin: 4px;
  flex: 1 1 150px;
  text-align: center;
  transition: filter 0.3s ease-in-out;
  
  &.refreshing {
    animation: ${refreshAnimation} 0.3s ease-in-out;
    animation-delay: ${({ index }) => index * 0.05}s;
  }

  h3 {
    margin: 4px 0px;
  }
`;


export const IdeaImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const IdeaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
  }
`;