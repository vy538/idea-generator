import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;