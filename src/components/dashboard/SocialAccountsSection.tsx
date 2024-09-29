import { Typography } from '@mui/material';

import AddSocialAccount from '@/components/dashboard/AddSocialAccount';
import SocialAccountList from '@/components/dashboard/SocialAccountList';

const SocialAccountsSection: React.FC = () => {
  return (
    <div>
      <Typography variant="h5" component="h5">
        Social Media Accounts
      </Typography>
      <SocialAccountList />
      <AddSocialAccount />
    </div>
  );
};

export default SocialAccountsSection;
