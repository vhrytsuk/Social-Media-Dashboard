import { type FC } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col bg-default-page text-gray-400">
      <Header />
      <div className="flex-1 py-6">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
