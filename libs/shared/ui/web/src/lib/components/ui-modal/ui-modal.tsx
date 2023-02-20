import { Box, Modal } from '@mui/material';
import { ReactElement } from 'react';

/* eslint-disable-next-line */
export interface UiModalProps {
  open: boolean;
  children: ReactElement | ReactElement[];
  onClose?: (event: unknown, reason: 'backdropClick' | 'escapeKeyDown') => void;
  width?: any | number;
}

export function UiModal({ open, children, onClose, width }: UiModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width || 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}

export default UiModal;
