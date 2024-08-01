import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileSlotMachine from './MobileSlotMachine';
import DesktopSlotMachine from './DesktopSlotMachine';
import { Idea } from '../types';

interface Props {
  ideas: Idea[];
  spinning: boolean;
  onGenerate: () => void;
}

const SlotMachine: React.FC<Props> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileSlotMachine {...props} /> : <DesktopSlotMachine {...props} />;
};

export default SlotMachine;