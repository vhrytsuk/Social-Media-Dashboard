import { SocialAccount } from '@/types';

export interface AccountsState {
  socialAccounts: SocialAccount[];
  selectedSocialAccount: SocialAccount | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
