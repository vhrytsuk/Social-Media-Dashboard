import react from 'react';

import Wrapper from '@/components/common/Wrapper';
import GeneralAccountInfo from '@/components/dashboard/GeneralAccountInfo';
import RecentComments from '@/components/dashboard/RecentComments';
import SocialAccountsSection from '@/components/dashboard/SocialAccountsSection';
import SideBar from '@/components/layout/SideBar';

const Dashboard: react.FC = () => {
  return (
    <Wrapper>
      <div className="dashboard container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <SideBar>
              <SocialAccountsSection />
            </SideBar>
          </div>

          <main role="main" className="col-xl-6 col-lg-8 col-md-7 mt-5 mt-md-0">
            <GeneralAccountInfo />
          </main>

          <aside className="col-xl-3 col-lg-12 mt-5 mt-xl-0">
            <div className="sidebar-sticky">
              <RecentComments />
            </div>
          </aside>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
