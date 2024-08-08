import styled from 'styled-components';

export const StyledButton = styled.button<{ lang: 'en' | 'zh' }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 16px 108px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 64px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 150px;
  border-style: solid;
  border-width: 8px;
  border-color: ${({ theme }) => theme.colors.primaryText};
  box-shadow: 10px 10px ${({ theme }) => theme.colors.primaryText};
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: translate(10px,10px);
    box-shadow: 0px 0px ${({ theme }) => theme.colors.primaryText};
  }

  /* Mobile styles */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 36px;
    font-size: 36px;
    width: 100%;
    border-width: 4px;
    border-radius: 75px;
    box-shadow: 5px 5px ${({ theme }) => theme.colors.primaryText};

    &:hover {
      transform: translate(5px,5px);
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 24px;
    border-width: 3px;
    border-radius: 50px;
    box-shadow: 3px 3px ${({ theme }) => theme.colors.primaryText};

    &:hover {
      transform: translate(3px,3px);
    }
  }
`;