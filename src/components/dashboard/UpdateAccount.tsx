import React from 'react';

import { ManageAccounts } from '@mui/icons-material';

import ButtonOnlyIcon from '@/components/common/ButtonOnlyIcon';
import Modal from '@/components/common/Modal';
import EditSocialAccountForm from '@/components/forms/EditSocialAccountForm';
import { useModalActions } from '@/hooks/useModalActions';
import { SocialAccount } from '@/types';

const UpdateAccount: React.FC<{ account: SocialAccount }> = ({ account }) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModalActions();

  return (
    <div>
      <ButtonOnlyIcon icon={ManageAccounts} onClick={() => handleOpenModal()} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Edit Social Account"
      >
        <EditSocialAccountForm account={account} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default UpdateAccount;
