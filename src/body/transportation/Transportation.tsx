'use client';

import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { LocalShipping as LocalShippingIcon } from 'components/Icons';
import { InfoCard, TransportCard } from 'components';

export const SampleData = [
  {
    id: '1',
    fromDestination: 'Bangkok',
    product: 'Durian',
    toDestination: 'ThaiDuri',
    destinationType: 'Factory',
  },
  {
    id: '2',
    fromDestination: 'Bangkok',
    product: 'Durian',
    toDestination: 'ThaiDuri',
    destinationType: 'Factory',
  },
  {
    id: '3',
    fromDestination: 'Bangkok',
    product: 'Durian',
    toDestination: 'ThaiDuri',
    destinationType: 'Factory',
  },
];

export const Transportation = () => {
  const router = useRouter();

  const onClick = (id: string) => {
    const pathName = `/transport/${id}`;
    router.push(pathName);
  };

  return (
    <>
      <InfoCard
        title="Company name"
        description="North of Chanthaburi City on Hwy 317"
        customDescription={
          <>
            <LocalShippingIcon sx={{ width: '28px', height: '28px' }} />
            <Typography component="p" fontSize="12px" ml="8px">
              HGKJAHHKJG
            </Typography>
          </>
        }
      />
      <Typography component="p" fontSize="16px" my="16px" fontWeight="600">
        Today transportation routes
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {SampleData.map((data) => (
          <TransportCard
            key={data.id}
            onClick={() => onClick(data.id)}
            fromDestination={data.fromDestination}
            product={data.product}
            toDestination={data.toDestination}
            destinationType={data.destinationType}
          />
        ))}
      </Box>
    </>
  );
};
