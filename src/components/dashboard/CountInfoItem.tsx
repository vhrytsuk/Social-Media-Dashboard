import React from 'react';
import CountUp from 'react-countup';

interface CountInfoItemProps {
  icon: React.ReactNode;
  activityCount: number;
  text: string;
}

const CountInfoItem: React.FC<CountInfoItemProps> = ({
  icon,
  activityCount,
  text,
}) => {
  return (
    <div className="flex items-center p-4 border-1 border-gray-1 rounded-3xl">
      <div className="mr-2">{icon}</div>
      <div>
        <div className="text-xl font-medium text-white">
          +<CountUp end={activityCount} duration={0.3} />
        </div>
        <div className="text-sm whitespace-nowrap	">{text}</div>
      </div>
    </div>
  );
};

export default CountInfoItem;
