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
    right: -50wh;
  }
`;

export const MainPageWrapper = styled(PageWrapper)`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 60px 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  height: auto;
  min-height: 100vh;
  overflow-y: auto;
  }
`;

export const GalleryPageWrapper = styled(PageWrapper)`

  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px;
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

export const AddIdeaPageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px;
`;

export const AdminPageWrapper = styled(PageWrapper)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px;
`;