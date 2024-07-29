import styled from 'styled-components';
import { theme } from './theme';

export const PageWrapper = styled.div`
  padding-top: 60px; // Add padding to account for fixed header
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const MainPageWrapper = styled(PageWrapper)`
  // Add any specific styles for the main page here
`;

export const GalleryPageWrapper = styled(PageWrapper)`
  // Add any specific styles for the gallery page here
`;