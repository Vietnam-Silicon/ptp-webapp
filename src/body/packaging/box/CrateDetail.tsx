'use client';
import { useRouter } from 'next/navigation';

import { According, NavigationBack, Box, ScanModal } from 'components';
import { AccordingData } from 'components/According';
import { Button } from 'controls';
import { UserRoleEnum } from 'body/login/constants';
import { generateBatchLot } from 'utils';
import { useState } from 'react';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: generateBatchLot(),
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
    label: 'Receiving time',
    content: new Date().toISOString(),
  },
];

export const CrateDetail = () => {
  const [showScanModal, setShowScanModal] = useState(false);

  const router = useRouter();

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
    }
  };

  const onCloseModal = () => {
    setShowScanModal(false);
  };

  const onGoBack = () => {
    router.back();
  };

  const onSubmit = () => {
    router.push(`/successful/${UserRoleEnum.AggregatorReceiving}`);
  };

  const goNextPage = (value: string) => {
    const pathName = `/packaging/box/input-info/?boxId=${value}`;
    router.push(pathName, {});
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <NavigationBack content="Durian original information" onBack={onGoBack} />
      <According title="Source Detailed information" data={SampleData} />

      <ScanModal onScan={onScan} open={showScanModal} onClose={onCloseModal} />

      <Box
        component="div"
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <Button
          sx={{ borderRadius: '24px' }}
          variant="contained"
          fullWidth
          color="secondary"
          type="submit"
          onClick={onSubmit}
        >
          Scan carton box
        </Button>
      </Box>
    </Box>
  );
};
