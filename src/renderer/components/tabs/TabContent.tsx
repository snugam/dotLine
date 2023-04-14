// TabContent.tsx

import React from 'react';

interface Props {
  isActive: boolean;
  children?: React.ReactNode;
}

const TabContent: React.FC<Props> = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : null;
};

export default TabContent;
