import React from 'react';

import Wrapper from '@/components/common/Wrapper';

const Footer: React.FC = () => {
    return (
      <div className='bg-gray-700 py-10'>
        <Wrapper>
          <footer>
            <div className='footer-content'>
              <p className='text-white'>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
          </footer>
        </Wrapper>
      </div>
    );
};

export default Footer;