import React from 'react';

import AccountMainPhoto from '@/components/common/AccountMainPhoto';
import { SocialAccount } from '@/types';
import reduceNumberCharacter from '@/utils/reduceNumberCharacter';

interface SocialAccountCardProps {
  selectedSocialAccount: SocialAccount;
}

const SocialAccountCard: React.FC<SocialAccountCardProps> = ({
  selectedSocialAccount,
}) => {
  const {
    accountName,
    countOfPosts,
    followers,
    following,
    accountImage,
    engagementRate,
  } = selectedSocialAccount;

  const parsedCountOfPosts = reduceNumberCharacter(countOfPosts);
  const parsedFollowers = reduceNumberCharacter(followers);
  const parsedFolowing = reduceNumberCharacter(following);

  return (
    <div className="border-1 border-gray-1 rounded-3xl p-6">
      <AccountMainPhoto url={accountImage} alt={`${accountName} profile`} />
      <p className="text-center text-xl font-semibold mt-4 text-white">
        {accountName}
      </p>
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <span className="block text-sm mb-2">Posts</span>
          <span className="block text-xl font-bold text-white">
            {parsedCountOfPosts}
          </span>
        </div>
        <div className="text-center">
          <span className="block text-sm mb-2">Followers</span>
          <span className="block text-xl font-bold text-white">
            {parsedFollowers}
          </span>
        </div>
        <div className="text-center">
          <span className="block text-sm mb-2">Folowing</span>
          <span className="block text-xl font-bold text-white">
            {parsedFolowing}
          </span>
        </div>
        <div className="text-center">
          <span className="block text-sm mb-2">Engagement Rate</span>
          <span className="block text-xl font-bold text-white">
            {engagementRate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialAccountCard;
