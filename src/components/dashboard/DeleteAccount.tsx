import { DeleteSweep } from '@mui/icons-material';
import React from 'react';

import ButtonOnlyIcon from '@/components/common/ButtonOnlyIcon';
import { useModalActions } from '@/hooks/useModalActions';
import { useAppDispatch } from '@/hooks/useTypedSelector';
import { removeSocialAccount } from '@/store/socialAccount/socialAccountThunks';
import DeleteAccountConfirmationModal from './DeleteAccountConfirmationModal';

const DeleteAccount: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();

  const { isModalOpen, handleOpenModal, handleCloseModal } = useModalActions();

  const handleRemoveSocialAccount = (id: string) => {
    dispatch(removeSocialAccount(id));
  };

  return (
    <>
      <ButtonOnlyIcon icon={DeleteSweep} onClick={handleOpenModal} />
      <DeleteAccountConfirmationModal
        show={isModalOpen}
        onHide={handleCloseModal}
        onConfirm={() => handleRemoveSocialAccount(id)}
      />
    </>
  );
};

export default DeleteAccount;
