import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import CountSection from '@/components/dashboard/CountSection';
import SocialAccountCard from '@/components/dashboard/SocialAccountCard';
import { RootState } from '@/store';

const GeneralAccountInfo: React.FC = () => {
  const { selectedSocialAccount } = useSelector(
    (state: RootState) => state.socialAccounts,
  );

  const { weeklyLikes, weeklyFollower, weeklyComments, socialMediaName } =
    selectedSocialAccount || {};

  if (!selectedSocialAccount) {
    return <p>You need select social media</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <Typography variant="h3" component="h1">
        {socialMediaName}
      </Typography>
      <div>
        <CountSection
          weeklyLikes={weeklyLikes || 0}
          weeklyComments={weeklyComments || 0}
          weeklyFollower={weeklyFollower || 0}
        />
      </div>
      <div>
        <SocialAccountCard selectedSocialAccount={selectedSocialAccount} />
      </div>
    </div>
  );
};

export default GeneralAccountInfo;
