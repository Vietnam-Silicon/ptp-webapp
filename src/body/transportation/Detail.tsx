'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Box, Typography, TransportCard, ScanModal } from 'components';
import { Button } from 'controls';

import { SampleData } from './Transportation';

export const TransportationDetail = () => {
  const params = useParams<{ id?: string }>();
  const route = useRouter();
  const [showScanModal, setShowScanModal] = useState(false);

  const onCloseModal = () => {
    setShowScanModal(false);
  };

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
    }
  };

  const goNextPage = (value: string) => {
    const pathName = `/transport/${params.id}/input-info/?scanId=${value}`;
    route.push(pathName);
  };

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
            <Typography component="p">North of Chanthaburi City on Hwy 317</Typography>
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
      <ScanModal onScan={onScan} open={showScanModal} onClose={onCloseModal} />
    </>
  );
};
