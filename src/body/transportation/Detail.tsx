'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';

import { ScanModal, TransportCard } from 'components';

import { SampleData } from './Transportation';
import { Box, Button, Typography } from '@mui/material';

export const TransportationDetail = () => {
  const params = useParams<{ id?: string }>();
  const [showScanModal, setShowScanModal] = useState(false);
  const [scanData, setScandata] = useState<string>();

  const data = SampleData.find((item) => item.id === params?.id);

  if (!data) return null;

  return (
    <>
      <Box component="div" sx={{ m: '16px' }}>
        <TransportCard
          fromDestination={data.fromDestination}
          product={data.product}
          toDestination={data.toDestination}
          destinationType={data.destinationType}
        />
        <Box
          component="div"
          sx={{
            my: '16px',
            border: '1px solid #eeeeee',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Box component="div">
            <Typography component="p" color="text.secondary">
              Farm address
            </Typography>
            <Typography component="p">
              North of Chanthaburi City on Hwy 317
            </Typography>
          </Box>

          <Box component="div">
            <Typography component="p" color="text.secondary">
              Farm contact number
            </Typography>
            <Typography component="p">8991 991891</Typography>
          </Box>

          <Box component="div">
            <Typography component="p" color="text.secondary">
              Factory address
            </Typography>
            <Typography component="p">Bankok, Thailand</Typography>
          </Box>

          <Box component="div">
            <Typography component="p" color="text.secondary">
              Factory contact number
            </Typography>
            <Typography component="p">89981667 8</Typography>
          </Box>

          <Box component="div">
            <Typography component="p" color="text.secondary">
              Type of goods
            </Typography>
            <Typography component="p">Durian</Typography>
          </Box>
        </Box>
        {scanData && <Typography component="p">{scanData}</Typography>}
        <Button
          onClick={() => setShowScanModal(true)}
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: '32px' }}
        >
          Scan
        </Button>
      </Box>

      <ScanModal
        onScan={setScandata}
        onClose={() => setShowScanModal(false)}
        open={showScanModal}
      />
    </>
  );
};
