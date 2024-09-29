import React from 'react';

import Button, { type ButtonProps } from '@mui/material/Button';

const style = {
  color: '#000',
  fontWeight: 'bold',
  backgroundColor: '#fde2d9',
  borderRadius: 10,
  '&:hover': {
    opacity: 0.8,
  },
  padding: '12px 24px',
};

const PrimaryButton: React.FC<ButtonProps> = ({ children, sx, ...props }) => {
  return (
    <Button {...props} sx={{ ...style, ...sx }}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
