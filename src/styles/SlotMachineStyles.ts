import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-33.33%); }
`;

export const SlotMachineWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SlotColumn = styled.div`
  width: 18%;
  height: 100px;
  overflow: hidden;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SlotContent = styled.div<{ spinning: boolean; duration: number; delay: number }>`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-out;
  ${({ spinning, duration, delay }) => spinning && css`
    animation: ${spin} ${duration}s linear infinite;
    animation-delay: ${delay}s;
  `}
`;

export const Slot = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #666;
`;

export const IdeaText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;