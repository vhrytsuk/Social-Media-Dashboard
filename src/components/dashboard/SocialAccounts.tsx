import { useState } from "react";
import { Button } from "@mui/material";

import SocialAccountList from "@/components/dashboard/SocialAccountList";
import AddSocialAccountModal from "@/components/dashboard/AddSocialAccountModal";

const SocialAccounts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h4>Social Media Accounts</h4>
      <SocialAccountList />

      <Button variant='contained' color='primary' onClick={handleOpenModal}>
        Add New Account
      </Button>
      <AddSocialAccountModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SocialAccounts;
