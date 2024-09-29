import { useAppDispatch } from '@/hooks/useTypedSelector';
import {
  addSocialAccount,
  updateSocialAccount,
} from '@/store/socialAccount/socialAccountThunks';
import { SocialAccount, SocialAccountFormValues } from '@/types';
import mockData from '@/utils/mockData';

export const useSocialAccountActions = () => {
  const dispatch = useAppDispatch();

  const handleAddSocialAccount = (values: SocialAccountFormValues) => {
    dispatch(
      addSocialAccount({
        id: new Date().toISOString(),
        ...values,
        ...mockData,
      }),
    );
  };

  const handleUpdateSocialAccount = (values: SocialAccount) => {
    dispatch(updateSocialAccount(values));
  };

  return {
    handleAddSocialAccount,
    handleUpdateSocialAccount,
  };
};
