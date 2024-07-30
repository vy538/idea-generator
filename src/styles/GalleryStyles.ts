// GalleryStyles.ts

import styled from 'styled-components';
import { theme } from './theme';
import { Body } from './Typography';
import { Category } from '../types';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 20px;
`;

export const IllustrationCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;

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
  background-color: rgba(255, 165, 180, 0.9); // Pink with 90% opacity
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const AuthorInfo = styled(Body)`
  align-self: flex-end;
  color: ${theme.colors.primaryText};
  font-weight: ${props => theme.fonts[props.lang].weights.medium};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled(Body)<{ category: Category }>`
  background-color: ${theme.colors.primaryAccent};
  color: ${theme.colors.primaryText};
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: ${props => theme.fonts[props.lang].weights.regular};
`;