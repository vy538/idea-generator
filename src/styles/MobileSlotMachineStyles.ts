import styled from 'styled-components';

export const MobileSlotMachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
`;

export const CategoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 4px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
  h3  {
    margin: 4px 0px;
  }
`;

export const IdeaImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const IdeaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
`;