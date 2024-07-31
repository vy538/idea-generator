// GalleryStyles.ts

import styled from 'styled-components';
import { Body } from './Typography';
import { Category } from '../types';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 20px;
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
`;

export const AuthorInfo = styled(Body)`
  margin: 0;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: ${({ theme,lang }) => theme.fonts[lang].weights.medium};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled(Body)<{ category: Category }>`
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.background};
  padding: 4px 8px;
  border-radius: 50px;
  margin: 0;
  font-weight: ${({ theme,lang }) => theme.fonts[lang].weights.regular};
`;