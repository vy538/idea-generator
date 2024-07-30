import styled from 'styled-components';
import { theme } from './theme';

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const IllustrationCard = styled.div`
  border: 1px solid ${theme.colors.primaryAccent};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${theme.colors.secondaryAccent};
`;

export const IllustrationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TagsContainer = styled.div`
  padding: 10px;
`;

export const Tag = styled.span`
  background-color: ${theme.colors.primaryAccent};
  color: ${theme.colors.primaryText};
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: ${theme.typography.body.fontSize};
  font-family: ${theme.fonts.en.family};
  font-weight: ${theme.fonts.en.weights.regular};
  display: inline-block;
`;

export const AuthorInfo = styled.div`
  margin-top: 10px;
  font-size: ${theme.typography.body.fontSize};
  color: ${theme.colors.secondaryText};
  font-family: ${theme.fonts.en.family};
  font-weight: ${theme.fonts.en.weights.light};
`;