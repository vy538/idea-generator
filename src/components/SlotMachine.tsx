import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileSlotMachine from './MobileSlotMachine';
import DesktopSlotMachine from './DesktopSlotMachine';
import { Idea } from '../types';
import { theme } from '../styles/theme';

interface Props {
  ideas: Idea[];
  spinning: boolean;
  onGenerate: () => void;
}

const SlotMachine: React.FC<Props> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.mobile });

  return isMobile ? <MobileSlotMachine {...props} /> : <DesktopSlotMachine {...props} />;
};

export default SlotMachine;