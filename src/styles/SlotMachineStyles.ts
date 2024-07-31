import styled, { keyframes, css } from 'styled-components';
import { H3, Body } from './Typography';

const gradientImage = require('../assets/gradient@2x.png');

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-33.33%); }
`;

export const SlotMachineWrapper = styled.div<{ lang: 'en' | 'zh' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0px 20px;
  font-family: ${ ({ theme, lang }) => theme.fonts[lang].family};
`;

export const SlotWindowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  width: 100%;
  margin-bottom: 120px;
`;


export const SlotColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnHeader = styled(H3)<{ lang: 'en' | 'zh' }>`
  text-align: center;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 12px 0px;
  width: 100%;
  text-transform: uppercase;
  text-overflow: ellipsis;
`;

export const SlotWindow = styled.div`
  height: 360px;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  outline: 8px solid ${({ theme }) => theme.colors.primaryText};
  outline-offset: -8px;
  border-radius: 4px;
  position: relative;
  box-sizing: border-box; // Ensures padding and border are included in the width

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 90px;
    z-index: 1;
    pointer-events: none;
    background-image: url(${gradientImage});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &::before {
    top: 0;
    transform: rotate(180deg);
  }

  &::after {
    bottom: 0;
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
  margin-bottom: 4px;
`;

export const IdeaText = styled(Body)<{ lang: 'en' | 'zh' }>`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const GenerateButtonWrapper = styled.div`
`;