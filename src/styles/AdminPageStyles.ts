// src/styles/AdminPageStyles.ts

import styled from 'styled-components';
import { PageWrapper } from './LayoutStyles';

export const AdminPageWrapper = styled(PageWrapper)`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const IdeaWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #ff6b6b;
  color: white;

  &:hover {
    background-color: #ff4757;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${({ active, theme }) => active ? theme.colors.primaryAccent : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
  cursor: pointer;
  
  &:not(:last-child) {
    border-right: none;
  }
  
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primaryAccent};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;