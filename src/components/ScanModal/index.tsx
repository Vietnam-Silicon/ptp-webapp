'use client';

import * as React from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Result } from '@zxing/library';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

type ScannerProps = {
  onUpdate: (arg0: unknown, arg1?: Result) => void;
  onError?: (arg0: string | DOMException) => void;
  width?: number | string;
  height?: number | string;
  facingMode?: 'environment' | 'user';
  torch?: boolean;
  delay?: number;
  videoConstraints?: MediaTrackConstraints;
  stopStream?: boolean;
};

const Scanner = BarcodeScannerComponent as unknown as React.FC<ScannerProps>;

interface ScanModalProps {
  onClose?: () => void;
  open: boolean;
  onScan: (value?: string) => void;
}

export const ScanModal = (props: ScanModalProps) => {
  return (
    <Modal open={props.open} onClose={props.onClose} disableScrollLock>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '500px',
          height: '100%',
          boxSizing: 'border-box',
          backgroundColor: '#555555',
          margin: 0,
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography fontSize="20px" align="center" sx={{ color: '#fff' }} mb="8px">
            Scan the QR/barcode
          </Typography>
          <Box
            sx={{
              borderRadius: '12px',
              overflowY: 'hidden',
              border: '2px solid #fff',
              mb: '32px',
              '& video': {
                display: 'block',
              },
            }}
          >
            <Scanner
              delay={100}
              onUpdate={(err, result) => {
                if (result) {
                  props.onScan(result.getText());
                }
              }}
            />
          </Box>
        </Box>

        <IconButton
          sx={{ color: '#fff', position: 'absolute', right: '10px', top: '10px', fontSize: '36px' }}
          onClick={props.onClose}
        >
          <CancelOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Modal>
  );
};
