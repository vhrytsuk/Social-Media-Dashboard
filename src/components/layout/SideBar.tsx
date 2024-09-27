import { type ReactNode, type FC } from "react";

interface SideBarProps {
  children: ReactNode;
  className?: string;
}

const SideBar: FC<SideBarProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`sidebar pr-6 md:border-r-2 md:border-gray-400 ${className}`}
    >
      <div className='sidebar-sticky'>{children}</div>
    </div>
  );
};

export default SideBar;
