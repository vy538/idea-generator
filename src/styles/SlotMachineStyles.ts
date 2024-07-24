import styled from 'styled-components';

export const SlotMachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SlotRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

export const Slot = styled.div`
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 18%;
  text-align: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #666;
`;

export const IdeaText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;