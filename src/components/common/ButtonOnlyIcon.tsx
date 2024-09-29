import React from 'react';

import { type ButtonProps } from '@mui/material/Button';

import { SvgIconComponent } from '@mui/icons-material';
import { Button } from '@mui/material';

interface ButtonOnlyIconProps extends ButtonProps {
  icon: SvgIconComponent;
}

const styles = {
  minWidth: '30px',
  height: '30px',
  borderRadius: '25%',
  padding: '2px 6px',
  backgroundColor: 'transparent',
  color: 'white',
  '&:hover': {
    backgroundColor: '#fde2d9',
    color: 'black',
  },
};

const ButtonOnlyIcon: React.FC<ButtonOnlyIconProps> = ({
  icon: Icon,
  variant = 'contained',
  onClick,
  ...rest
}) => {
  return (
    <Button variant={variant} onClick={onClick} sx={styles} {...rest}>
      <Icon />
    </Button>
  );
};

export default ButtonOnlyIcon;
