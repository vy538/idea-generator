import styled from 'styled-components';
import { Body } from './Typography';
import { Category } from '../types';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const IllustrationCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border: 4px solid ${({ theme }) => theme.colors.primaryText};

  &:hover .overlay {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-width: 2px;
  }
`;

export const IllustrationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background}80;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    opacity: 1;
    background-color: transparent;
    backdrop-filter: blur(0px);
    padding: 8px;
  }
`;

export const AuthorInfo = styled(Body)`
  margin: 0;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
  }
`;

export const Tag = styled(Body)<{ category: Category }>`
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.background};
  padding: 4px 8px;
  border-radius: 50px;
  margin: 0;
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.regular};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
    padding: 2px 6px;
  }
`;