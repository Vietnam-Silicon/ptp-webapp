'use client';

import { FC } from 'react';
import { Box, Card, Typography } from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import FactoryIcon from '@mui/icons-material/Factory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

interface TransportCardProps {
  fromDestination: string;
  product: string;
  toDestination: string;
  destinationType: string;
  onClick?: () => void;
}

export const TransportCard: FC<TransportCardProps> = ({
  fromDestination,
  toDestination,
  product,
  destinationType,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        backgroundColor: '#EEEEEE',
        borderRadius: '8px',
        p: '16px',
        alignItems: 'center',
        gap: '8px',
        border: '1px solid gray',
        justifyContent: 'space-between',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '8px' }}>
        <ForestIcon sx={{ width: '24px', height: '24px', mb: '4px' }} />
        <Typography component="p" fontSize="14px">
          {fromDestination}
        </Typography>
        <Typography component="p" fontSize="14px">
          {product}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '8px' }}>
        <ArrowForwardIcon sx={{ width: '36px', height: '36px', mb: '4px' }} />
        <LocalShippingOutlinedIcon sx={{ width: '16px', height: '16px' }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: '8px' }}>
        <FactoryIcon sx={{ width: '24px', height: '24px', mb: '4px' }} />
        <Typography component="p" fontSize="16px">
          {toDestination}
        </Typography>
        <Typography component="p" fontSize="16px">
          {destinationType}
        </Typography>
      </Box>
    </Card>
  );
};
