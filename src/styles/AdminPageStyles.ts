import styled from 'styled-components';
import { Input as SharedInput, Select as SharedSelect, SubmitButton as SharedSubmitButton } from './FormStyles';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';

export const AdminPageContainer = styled.div`
  padding: 20px;
`;

export const TabContainer = styled.div`
  margin-bottom: 20px;
`;

export const TabList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryAccent};
`;

export const TabItem = styled.li<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primaryAccent : theme.colors.background};
  color: ${({ active, theme }) => 
    active ? theme.colors.primaryText : theme.colors.secondaryText};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-bottom: none;
  margin-right: 0.5rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const TabContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-top: none;
  padding: 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Input = styled(SharedInput)`
  // You can add any additional styles specific to Admin input here
`;

export const Button = styled(SharedSubmitButton)`
  // You can add any additional styles specific to Admin button here
`;

export const DeleteButton = styled(Button)`
  background-color: #ff6b6b;
  color: white;

  &:hover {
    background-color: #ff4757;
  }
`;

export const CategorySelect = styled(SharedSelect)`
  // You can add any additional styles specific to Admin category select here
`;

export const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px; // Adjust this value to change the width of the image container
  height: 120px; // Adjust this value to change the height of the image container
  margin: 16px auto; // Center the image container
`;

export const StyledCardMedia = styled(CardMedia)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain !important;
` as typeof CardMedia;

export const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

export const StyledCardActions = styled(CardActions)`
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const FileInput = styled.input`
  margin-bottom: 1rem;
`;

export const CenteredTypography = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const AdminButton = styled(SharedSubmitButton)`
  width: 100%;
`;

export const AdminDeleteButton = styled(DeleteButton)`
  width: 100%;
`;