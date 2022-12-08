import React from "react";

export interface ModalUserFeedbackProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  style: any;
  children: React.ReactNode;
  usage: ModalUsage;
}

export enum ModalUsage {
  alert,
  feedback,
}
