// src/styles/AdminPageStyles.ts

import styled from 'styled-components';

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

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 4px;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #ff6b6b;
  color: white;

  &:hover {
    background-color: #ff4757;
  }
`;

export const CategorySelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 4px;
  margin-right: 0.5rem;
`;