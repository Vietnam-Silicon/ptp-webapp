'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { InfoCard, PieChart, ScanModal, Typography, Box, BarChart } from 'components';
import { AddOutlined as AddOutlinedIcon, LocationOn } from 'components/Icons';
import { Button } from 'controls';

const SampleChartData = [
  {
    name: 'Kan Yau',
    value: 30,
  },
  {
    name: 'Kradum-thong',
    value: 20,
  },
  {
    name: 'Chaduri',
    value: 40,
  },
  {
    name: 'Chanee',
    value: 40,
  },
];

const SampleBarChartData = [
  {
    name: 'F1',
    value: 16,
  },
  {
    name: 'F2',
    value: 5,
  },
  {
    name: 'F3',
    value: 7,
  },
  {
    name: 'F4',
    value: 16,
  },
];

export const Receiving: FC = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const route = useRouter();

  const onCloseModal = () => {
    setShowScanModal(false);
  };

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
    }
  };

  const goNextPage = (value: string) => {
    const pathName = `/receiving/?cratedId=${value}`;
    route.push(pathName);
  };

  return (
    <>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '910px' }}
      >
        <InfoCard
          title="Nonthaburi Durian"
          description="North of Chanthaburi City on Hwy 317"
          customDescription={
            <Box component="div" sx={{ display: 'flex', gap: '24px', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn />
                <Typography component="p" fontSize="12px" ml="8px">
                  HGKJAHHKJG
                </Typography>
              </Box>
            </Box>
          }
        />

        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            borderRadius: '12px',
            border: '1px solid #eeeeee',
            minWidth: '100px',
          }}
        >
          <BarChart data={SampleBarChartData} />
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            borderRadius: '12px',
            border: '1px solid #eeeeee',
            minWidth: '100px',
          }}
        >
          <PieChart data={SampleChartData} />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: '24px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <Button
          onClick={() => setShowScanModal(true)}
          startIcon={<AddOutlinedIcon />}
          variant="contained"
          sx={{ backgroundColor: '#eeeeee', color: 'black', height: '56px', borderRadius: '16px' }}
        >
          Scan to review
        </Button>
      </Box>
      <ScanModal onScan={onScan} open={showScanModal} onClose={onCloseModal} />
    </>
  );
};
