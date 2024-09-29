import { PayloadAction } from '@reduxjs/toolkit';
import { AccountsState } from './socialAccountTypes';

import { SocialAccount } from '@/types';

export const handleFetchSocialAccountsPending = (state: AccountsState) => {
  state.status = 'loading';
};

export const handleFetchSocialAccountsFulfilled = (
  state: AccountsState,
  action: PayloadAction<SocialAccount[]>,
) => {
  state.status = 'succeeded';

  state.socialAccounts = action.payload;
};

export const handleFetchSocialAccountsRejected = (state: AccountsState) => {
  state.status = 'failed';

  state.error = 'Failed to fetch social accounts';
};

export const handleAddSocialAccountFulfilled = (
  state: AccountsState,
  action: PayloadAction<SocialAccount>,
) => {
  state.socialAccounts.push(action.payload);
};

export const handleRemoveSocialAccountPending = (state: AccountsState) => {
  state.status = 'loading';
};

export const handleRemoveSocialAccountFulfilled = (
  state: AccountsState,
  action: PayloadAction<{ id: string }>,
) => {
  const { id } = action.payload;

  state.status = 'succeeded';
  state.socialAccounts = state.socialAccounts.filter(
    (account) => account.id !== id,
  );
};

export const handleRemoveSocialAccountRejected = (state: AccountsState) => {
  state.status = 'failed';
  state.error = 'Failed to remove account';
};

export const handleUpdateSocialAccountFulfilled = (
  state: AccountsState,
  action: PayloadAction<SocialAccount>,
) => {
  const updatedAccount = action.payload;

  state.socialAccounts = state.socialAccounts.map((account) =>
    account.id === updatedAccount.id ? updatedAccount : account,
  );
};

export const handleUpdateSocialAccountRejected = (state: AccountsState) => {
  state.status = 'failed';
  state.error = 'Failed to update account';
};
