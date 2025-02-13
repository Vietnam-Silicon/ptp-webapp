'use client';

import { useRouter } from 'next/navigation';

import {
  Box,
  Typography,
  InfoCard,
  TransportCard,
} from 'components';
import {
  WbSunny as WbSunnyIcon,
  WaterDropSharp as WaterDropSharpIcon,
} from 'components/Icons';

export const SampleData = [
  {
    id: '1',
    fromDestination: 'Bangkok',
    product: 'Durian',
    toDestination: 'ThaiDuri',
    destinationType: 'Factory',
  },
];

export const Container = () => {
  const router = useRouter();

  const onClick = (id: string) => {
    const pathName = `/container-route/${id}`;
    router.push(pathName);
  };

  return (
    <>
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
