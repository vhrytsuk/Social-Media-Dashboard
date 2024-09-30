import { Box, Button, List, ListItem } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Groups2 } from '@mui/icons-material';

import Loader from '@/components/common/Loader';
import SocialNetworkIcon from '@/components/common/SocialNetworkIcon';
import { useSocialAccountActions } from '@/hooks/dashboard/useSocialAccountActions';
import { RootState } from '@/store/index';
import { scrollGeneralStylleMU } from '@/utils/materialUiStyles';
import reduceNumberCharacter from '@/utils/reduceNumberCharacter';
import DeleteAccount from './DeleteAccount';
import UpdateAccount from './UpdateAccount';

const SocialAccountList: React.FC = () => {
  const { socialAccounts, status, error } = useSelector(
    (state: RootState) => state.socialAccounts,
  );

  const { selectSocialAccountById, getAllSocialAccounts } =
    useSocialAccountActions();

  const handleButtonClick = (id: string) => {
    selectSocialAccountById(id);
  };

  useEffect(() => {
    if (status === 'idle') {
      getAllSocialAccounts();
    }

    if (status === 'succeeded' && socialAccounts.length > 0) {
      selectSocialAccountById(socialAccounts[0].id);
    }
  }, [status, socialAccounts, getAllSocialAccounts, selectSocialAccountById]);

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={scrollGeneralStylleMU}>
      {status === 'loading' ? <Loader /> : null}
      <List>
        {socialAccounts.map((account) => {
          const { id, socialMediaName, followers, accountName } = account;
          return (
            <ListItem key={id} className="flex items-center gap-3">
              <SocialNetworkIcon
                socialName={socialMediaName}
                iconProps={{
                  fontSize: 'large',
                }}
              />
              <div className="flex flex-col flex-1">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'self-start',
                  }}
                  onClick={() => handleButtonClick(id)}
                >
                  {socialMediaName}
                  <span className="text-xs text-white">{accountName}</span>
                </Button>
                <div className="flex gap-2 justify-between">
                  <span className="flex items-center gap-1">
                    <Groups2 />
                    {reduceNumberCharacter(followers)}
                  </span>
                  <div className="flex gap-2">
                    <DeleteAccount id={id} />
                    <UpdateAccount account={account} />
                  </div>
                </div>
              </div>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SocialAccountList;
