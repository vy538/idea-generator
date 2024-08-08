import styled from 'styled-components';
import { Body } from './Typography';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryText}E0;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 9999;
  overflow-y: auto;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    align-items: center;
  }
`;

export const SocialMediaContainer = styled.div`
  align-self: flex-start;
  margin-bottom: 16px;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: center;
    margin-bottom: 12px;
  }
`;

export const SocialMediaLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IdeasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    gap: 4px;
    margin-bottom: 12px;
  }
`;

export const IdeaTag = styled(Body)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 4px 8px;
  border-radius: 16px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2px 6px;
    font-size: 0.85em;
  }
`;

export const EnlargedImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  align-self: center;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  img {
    width: 24px;
    height: 24px;
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 10px;
    right: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;