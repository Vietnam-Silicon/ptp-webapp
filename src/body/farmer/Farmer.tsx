'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { InfoCard, GeneralInformation, PieChart, ScanModal, Typography, Box } from 'components';
import {
  WbSunny as WbSunnyIcon,
  WaterDropSharp as WaterDropSharpIcon,
  AddOutlined as AddOutlinedIcon,
} from 'components/Icons';
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

export const Farmer: FC = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const route = useRouter();

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
      setShowScanModal(false);
    }
  };

  const goNextPage = (value: string) => {
    const pathName = `/farmer/?scanId=${value}`;
    route.push(pathName);
  };

  return (
    <>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <InfoCard
          title="Nonthaburi Durian"
          description="North of Chanthaburi City on Hwy 317"
          customDescription={
            <Box component="div" sx={{ display: 'flex', gap: '24px', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WbSunnyIcon />
                <Typography component="p" fontSize="12px" ml="8px">
                  31 °C
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WaterDropSharpIcon />
                <Typography component="p" fontSize="12px" ml="8px">
                  80 %
                </Typography>
              </Box>
            </Box>
          }
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '16px' }}>
          <GeneralInformation title="30" content="Harvested last season" description="tons" />
          <GeneralInformation title="95" content="AA-grade" description="percent" />
        </Box>

        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '300px',
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
          position: 'absolute',
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
          Create new batch
        </Button>
      </Box>
      <ScanModal onScan={onScan} open={showScanModal} />
    </>
  );
};
