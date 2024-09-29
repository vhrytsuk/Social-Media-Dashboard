import React from 'react';

import {
  Assistant as AssistantIcon,
  ConnectWithoutContact as DefaultIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

interface SocialNetworkIconProps {
  socialName: string;
  iconProps?: React.ComponentProps<typeof FacebookIcon>;
}

const iconMap: {
  [key: string]: React.ComponentType<React.ComponentProps<typeof FacebookIcon>>;
} = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Snapchat: AssistantIcon,
  YouTube: YouTubeIcon,
};

const SocialNetworkIcon: React.FC<SocialNetworkIconProps> = ({
  socialName,
  iconProps,
}) => {
  const IconComponent = iconMap[socialName] || DefaultIcon; // Default icon

  return <IconComponent {...iconProps} />;
};

export default SocialNetworkIcon;
