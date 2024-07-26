import styled, { keyframes, css } from 'styled-components';
import { theme } from './theme';

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-33.33%); }
`;

export const SlotMachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: ${theme.colors.background};
  font-family: ${theme.fonts.primary};
`;

export const SlotWindowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 32px;
  margin-bottom: 30px;
`;

export const SlotColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnHeader = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  color: ${theme.colors.secondary};
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SlotWindow = styled.div`
  height: 360px;
  width: 100%;
  overflow: hidden;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 90px;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, ${theme.colors.border} 0%, rgba(253,248,243,0) 100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, ${theme.colors.border} 0%, rgba(253,248,243,0) 100%);
  }
`;


export const SlotContent = styled.div<{ spinning: boolean; duration: number; delay: number }>`
  transition: transform 0.5s ease-out;
  margin-top:-20px;

  ${({ spinning, duration, delay }) => spinning && css`
    animation: ${spin} ${duration}s linear infinite;
    animation-delay: ${delay}s;
  `}
`;

export const Slot = styled.div`
  height: 100px; // Keep this the same
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px; // Add some padding to create more space
`;

export const IdeaImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 5px;
`;

export const IdeaText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const GenerateButtonWrapper = styled.div`
  margin-top: 30px;
`;