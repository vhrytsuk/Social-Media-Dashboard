import { createSlice } from '@reduxjs/toolkit';

import * as extraReducers from './socialAccountHandlers';
import { AccountsState } from './socialAccountTypes';

import {
  addSocialAccount,
  fetchSocialAccounts,
  removeSocialAccount,
  updateSocialAccount,
} from './socialAccountThunks';

const initialState: AccountsState = {
  socialAccounts: [],
  selectedSocialAccount: null,
  status: 'idle',
  error: null,
};

const socialAccountSlice = createSlice({
  name: 'socialAccounts',
  initialState,
  reducers: {
    selectSocialAccount: (state, action) => {
      state.selectedSocialAccount =
        state.socialAccounts.find(
          (account) => account.socialMediaName === action.payload,
        ) ?? null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSocialAccounts.pending,
        extraReducers.handleFetchSocialAccountsPending,
      )
      .addCase(
        fetchSocialAccounts.fulfilled,
        extraReducers.handleFetchSocialAccountsFulfilled,
      )
      .addCase(
        fetchSocialAccounts.rejected,
        extraReducers.handleFetchSocialAccountsRejected,
      )
      .addCase(
        addSocialAccount.fulfilled,
        extraReducers.handleAddSocialAccountFulfilled,
      )
      .addCase(
        removeSocialAccount.pending,
        extraReducers.handleRemoveSocialAccountPending,
      )
      .addCase(
        removeSocialAccount.fulfilled,
        extraReducers.handleRemoveSocialAccountFulfilled,
      )
      .addCase(
        removeSocialAccount.rejected,
        extraReducers.handleRemoveSocialAccountRejected,
      )
      .addCase(
        updateSocialAccount.fulfilled,
        extraReducers.handleUpdateSocialAccountFulfilled,
      )
      .addCase(
        updateSocialAccount.rejected,
        extraReducers.handleUpdateSocialAccountRejected,
      );
  },
});

export const { selectSocialAccount } = socialAccountSlice.actions;

export default socialAccountSlice.reducer;
