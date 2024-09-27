import { type FC } from "react";

import Wrapper from "@/components/common/Wrapper";
import SideBar from "@/components/layout/SideBar";
import SocialAccounts from "@/components/dashboard/SocialAccounts";

const Dashboard: FC = () => {
  return (
    <Wrapper>
      <div className='dashboard container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <SideBar>
                <SocialAccounts />
            </SideBar>
          </div>

          <main role='main' className='col-md-6 ml-sm-auto col-lg-6 px-4'>
            <h1>Main Content</h1>
            <p>This is the main content area.</p>
          </main>

          <aside className='col-md-3'>
            <div className='sidebar-sticky'>
              <h4>Right Sidebar</h4>
              <p>Additional content can go here.</p>
            </div>
          </aside>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
