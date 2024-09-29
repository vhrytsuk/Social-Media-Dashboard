import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import DefaultAvatar from '@/assets/dragon.svg';
import { RootState } from '@/store';

const RecentComments: React.FC = () => {
  const { selectedSocialAccount } = useSelector(
    (state: RootState) => state.socialAccounts,
  );

  const { lastComments } = selectedSocialAccount || {};

  if (!lastComments?.length) {
    return null;
  }

  return (
    <div>
      <Typography variant="h5" component="h2">
        Recent Comments
      </Typography>
      <ul className="list-none py-4">
        {lastComments.map(
          ({ comment, author, authorPhoto = DefaultAvatar }, index) => (
            <li key={index} className="flex flex-col mb-6 gap-3">
              <div className="flex items-center gap-x-4">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  alt={author}
                  src={authorPhoto}
                />
                <span className="font-semibold text-white text">{author}</span>
              </div>
              <div>
                <p>{comment}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default RecentComments;
