import styled from 'styled-components';

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
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    object-fit: cover;
  }
`;

export const MainPageWrapper = styled(PageWrapper)`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }
`;

export const GalleryPageWrapper = styled(PageWrapper)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 0px;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 80px 10px 20px;
    height: auto;
    min-height: 100vh;
  }
`;