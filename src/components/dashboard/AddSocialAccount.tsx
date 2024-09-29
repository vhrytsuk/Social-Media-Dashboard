import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Box } from '@mui/material';
import React from 'react';

import Modal from '@/components/common/Modal';
import PrimaryButton from '@/components/common/PrimaryButton';
import AddSocialAccountForm from '@/components/forms/AddSocialAccountForm';
import { useModalActions } from '@/hooks/useModalActions';

const AddSocialAccount: React.FC = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModalActions();

  return (
    <Box>
      <PrimaryButton
        variant="contained"
        color="secondary"
        onClick={handleOpenModal}
        endIcon={<PersonAddAltIcon />}
        sx={{
          display: 'flex',
          margin: '15px auto',
        }}
      >
        Add New Account
      </PrimaryButton>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add Social Account"
      >
        <AddSocialAccountForm onClose={handleCloseModal} />
      </Modal>
    </Box>
  );
};

export default AddSocialAccount;
