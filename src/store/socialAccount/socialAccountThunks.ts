import { createAsyncThunk } from '@reduxjs/toolkit';

import socialNetworkAPI from '@/store/api/socialNetworkAPI';
import { SocialAccount } from '@/types';

export const fetchSocialAccounts = createAsyncThunk(
  'socialAccounts/fetchSocialAccounts',
  async () => {
    try {
      const response = await socialNetworkAPI.get<SocialAccount[]>(
        '/social-network-list',
      );

      return response.data;
    } catch {
      throw new Error('Failed to fetch social accounts');
    }
  },
);

export const addSocialAccount = createAsyncThunk(
  'socialAccounts/addSocialAccount',
  async (account: SocialAccount) => {
    try {
      const response = await socialNetworkAPI.post<SocialAccount>(
        '/social-network-list',
        account,
      );

      return response.data;
    } catch {
      throw new Error('Failed to add social account');
    }
  },
);

export const removeSocialAccount = createAsyncThunk(
  'socialAccounts/removeSocialAccount',
  async (id: string) => {
    try {
      const response = await socialNetworkAPI.delete<{ id: string }>(
        `/social-network-list/${id}`,
      );

      return { id: response.data.id };
    } catch {
      throw new Error('Failed to remove social account');
    }
  },
);

export const updateSocialAccount = createAsyncThunk(
  'socialAccounts/updateSocialAccount',
  async (account: SocialAccount) => {
    try {
      const response = await socialNetworkAPI.put<SocialAccount>(
        `/social-network-list/${account.id}`,
        account,
      );

      return response.data;
    } catch {
      throw new Error('Failed to update social account');
    }
  },
);
