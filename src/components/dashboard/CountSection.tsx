import GroupAddIcon from '@mui/icons-material/GroupAdd';
import React from 'react';

import CountInfoItem from '@/components/dashboard/CountInfoItem';

interface CountSectionProps {
  weeklyLikes: number;
  weeklyComments: number;
  weeklyFollower: number;
}

const CountSection: React.FC<CountSectionProps> = ({
  weeklyFollower,
  weeklyLikes,
  weeklyComments,
}) => {
  return (
    <div className="row g-3">
      <div className="col">
        <CountInfoItem
          icon={<GroupAddIcon />}
          activityCount={weeklyFollower}
          text="Weekly Follower"
        />
      </div>
      <div className="col">
        <CountInfoItem
          icon={<GroupAddIcon />}
          activityCount={weeklyLikes}
          text="Weekly Like"
        />
      </div>
      <div className="col">
        <CountInfoItem
          icon={<GroupAddIcon />}
          activityCount={weeklyComments}
          text="Weekly Comment"
        />
      </div>
    </div>
  );
};

export default CountSection;
