'use client';
import { FC } from 'react';

import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import { NavigationBack, According } from 'components';
import type { AccordingData } from 'components/According';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: 'BL899KGHJA',
  },
  {
    label: 'crates ID',
    content: 'CR79071',
  },
  {
    label: 'Number of crates',
    content: '6',
  },
  {
    label: 'Total weight (kg)',
    content: '2000',
  },
  {
    label: 'Quantity',
    content: '800',
  },
  {
    label: 'Harvester',
    content: 'Farmer Name',
  },
  {
    label: 'Farm Location',
    content: 'Nonthaburi Durian',
    description: 'North of Chanthaburi City on Hwy 317',
  },
  {
    label: 'Farm GLN',
    content: '775674899644789',
  },
  {
    label: 'Truck ID',
    content: 'TR7199HJK',
  },
  {
    label: 'Driver',
    content: 'Driver name',
  },
];

export const InputInfo: FC = () => {
  const router = useRouter();

  const onGoBack = () => {
    router.back();
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <NavigationBack content="Durian receiving information" onBack={onGoBack} />
      <According title="Detailed information" data={SampleData} />
    </Box>
  );
};
