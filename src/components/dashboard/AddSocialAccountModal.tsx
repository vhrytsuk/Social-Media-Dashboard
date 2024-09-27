import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, TextField, Button } from "@mui/material";


import { addSocialAccount } from "@/features/socialAccount/socialAccountSlice";
import { useAppDispatch } from "@/hooks/useTypedSelector";

interface AddSocialMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSocialMediaModal: React.FC<AddSocialMediaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState(0);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      addSocialAccount({
        id: new Date().toISOString(),
        name,
        followers,
        engagementRate: 0,
        recentPosts: [],
      })
    );
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          bgcolor: "background.paper",
          margin: "auto",
          maxWidth: 400,
        }}
      >
        <h2>Add New Social Media Account</h2>
        <TextField
          label='Name'
          fullWidth
          margin='normal'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label='Followers'
          type='number'
          fullWidth
          margin='normal'
          value={followers}
          onChange={(e) => setFollowers(Number(e.target.value))}
        />
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Add Account
        </Button>
      </Box>
    </Modal>
  );
};

export default AddSocialMediaModal;
