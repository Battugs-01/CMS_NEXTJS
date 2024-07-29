"use client";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogHeader>{title}</DialogHeader>
          <DialogDescription>{description}</DialogDescription>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
