import { logout } from './../../../services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useHeaderActions = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    logout();
    navigate('/');
    setOpen(null);
  };

  return { handleOpen, handleClose, open };
};

export default useHeaderActions;
