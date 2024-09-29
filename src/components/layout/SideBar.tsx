import { type FC, type ReactNode } from 'react';

interface SideBarProps {
  children: ReactNode;
  className?: string;
}

const SideBar: FC<SideBarProps> = ({ children, className = '' }) => {
  return (
    <div className={`sidebar pr-3 ${className}`}>
      <div className="sidebar-sticky">{children}</div>
    </div>
  );
};

export default SideBar;
