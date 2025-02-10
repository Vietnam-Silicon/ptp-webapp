'use-client';

import * as React from 'react';
import { Box, Button, Drawer } from '@mui/material';
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
  onClose: () => void;
  open: boolean;
  onScan: (value?: string) => void;
}

export const ScanModal = (props: ScanModalProps) => {
  return (
    <Drawer
      sx={{
        width: '100%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '100%',
          boxSizing: 'border-box',
          height: '100%',
          padding: '20px',
          backgroundColor: 'grey',
        },
      }}
      PaperProps={{ height: '100%' }}
      anchor={'bottom'}
      open={props.open}
      onClose={props.onClose}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Scanner
          delay={200}
          onUpdate={(err, result) => {
            if (result) {
              props.onScan(result.getText());
              props.onClose();
            }
          }}
        />
      </Box>

      <Button variant="contained" color="primary" fullWidth onClick={props.onClose}>
        Close
      </Button>
    </Drawer>
  );
};
