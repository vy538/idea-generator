import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-33.33%); }
`;

export const SlotMachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 72px);
  margin-top: 72px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const SlotWindowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  max-width: 1200px;
`;

export const SlotColumn = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnHeader = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  color: #333;
`;

export const SlotWindow = styled.div`
  height: 360px; // Keep this the same
  width: 100%;
  overflow: hidden;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 120px; // Increased from 100px to 110px
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0));
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
  margin-top: 20px;
`;