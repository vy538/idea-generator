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
  display: flex;
  flex-direction: column;
`;

export const ColumnHeader = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  color: #333;
`;

export const SlotWindow = styled.div`
  height: 100px;
  overflow: hidden;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SlotContent = styled.div<{ spinning: boolean; duration: number; delay: number }>`
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

export const IdeaImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 5px;
`;

export const IdeaText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;