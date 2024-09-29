import React from 'react';

import {
  Delete as DeleteIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import PrimaryButton from '@/components/common/PrimaryButton';

interface DeleteAccountConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
}

const DeleteAccountConfirmationModal: React.FC<
  DeleteAccountConfirmationModalProps
> = ({ show, onHide, onConfirm }) => {
  return (
    <Dialog
      open={show}
      onClose={onHide}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      PaperProps={{
        style: {
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '500px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <DialogTitle id="confirm-dialog-title" style={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          component="div"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Confirm Account Deletion
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Typography
          id="confirm-dialog-description"
          variant="body1"
          style={{ color: '#555', marginBottom: '16px', textAlign: 'center' }}
        >
          Are you sure you want to delete your account? This action{' '}
          <strong>cannot</strong> be undone.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          style={{ marginTop: '16px' }}
        >
          <WarningIcon fontSize="large" style={{ color: 'black' }} />
        </Box>
      </DialogContent>

      <DialogActions style={{ justifyContent: 'center', padding: '20px 24px' }}>
        <PrimaryButton onClick={onHide} variant="outlined">
          Cancel
        </PrimaryButton>
        <PrimaryButton
          onClick={onConfirm}
          variant="contained"
          endIcon={<DeleteIcon />}
        >
          Delete
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountConfirmationModal;
