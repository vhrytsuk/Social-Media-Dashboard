import {
  Backdrop,
  Box,
  Fade,
  Modal as MuiModal,
  Typography,
} from '@mui/material';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 6,
  p: 6,
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
