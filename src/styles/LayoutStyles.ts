import styled from 'styled-components';
import { theme } from './theme';

export const PageWrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`;

export const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: fill;
`;

export const MainPageWrapper = styled(PageWrapper)`
  // Add any specific styles for the main page here
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const GalleryPageWrapper = styled(PageWrapper)`
  // Add any specific styles for the gallery page here
  background-color: ${theme.colors.background};
  padding: 60px 20px;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: hidden;
`;