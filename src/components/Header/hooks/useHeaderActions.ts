import { useState } from 'react';

const useHeaderActions = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return { handleOpen, handleClose, open };
};

export default useHeaderActions;
