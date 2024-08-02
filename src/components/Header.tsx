import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { theme } from '../styles/theme';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.mobile });

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;