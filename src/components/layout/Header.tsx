import React from 'react';

import Logo from '@/components/common/Logo';
import Wrapper from '@/components/common/Wrapper';

const Header: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <header className="py-4">
          <Logo />
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;
