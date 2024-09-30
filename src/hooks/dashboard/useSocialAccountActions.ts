import { useAppDispatch } from '@/hooks/useTypedSelector';
import { selectSocialAccount } from '@/store/socialAccount/socialAccountSlice';
import {
  addSocialAccount,
  fetchSocialAccounts,
  updateSocialAccount,
} from '@/store/socialAccount/socialAccountThunks';
import { SocialAccount, SocialAccountFormValues } from '@/types';
import mockData from '@/utils/mockData';
import { useCallback } from 'react';

export const useSocialAccountActions = () => {
  const dispatch = useAppDispatch();

  const handleAddSocialAccount = useCallback(
    (values: SocialAccountFormValues) => {
      dispatch(
        addSocialAccount({
          id: new Date().toISOString(),
          ...values,
          ...mockData,
        }),
      );
    },
    [dispatch],
  );

  const handleUpdateSocialAccount = useCallback(
    (values: SocialAccount) => {
      dispatch(updateSocialAccount(values));
    },
    [dispatch],
  );

  const getAllSocialAccounts = useCallback(() => {
    dispatch(fetchSocialAccounts());
  }, [dispatch]);

  const selectSocialAccountById = useCallback(
    (id: string) => {
      dispatch(selectSocialAccount(id));
    },
    [dispatch],
  );

  return {
    handleAddSocialAccount,
    handleUpdateSocialAccount,
    getAllSocialAccounts,
    selectSocialAccountById,
  };
};
