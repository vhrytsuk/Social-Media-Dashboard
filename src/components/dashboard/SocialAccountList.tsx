import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";

import { RootState } from "@/app/store";
import { useAppDispatch } from "@/hooks/useTypedSelector";
import { fetchSocialAccounts } from "@/features/socialAccount/socialAccountSlice";

const SocialAccountList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { socialAccounts, status, error } = useSelector(
    (state: RootState) => state.socialAccounts
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSocialAccounts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <List>
      {socialAccounts.map((account) => (
        <ListItem key={account.id}>
          <ListItemText
            primary={account.name}
            secondary={`Followers: ${account.followers}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SocialAccountList;
