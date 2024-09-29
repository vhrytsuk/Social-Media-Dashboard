import React from 'react';
import { Link } from 'react-router-dom';

import LogoSvg from '@/assets/logo.svg';
interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt = 'Logo',
  width = 50,
  height = 50,
}) => {
  return (
    <Link to="/" className="flex gap-x-2 items-center">
      <img src={src || LogoSvg} alt={alt} width={width} height={height} />
      <span className="text-white text-xl font-bold">Social Media</span>
    </Link>
  );
};

export default Logo;
