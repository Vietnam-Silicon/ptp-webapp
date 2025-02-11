'use client';

import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface NavigationBackProps {
  content: string;
  onBack?: () => void;
}

export const NavigationBack: FC<NavigationBackProps> = ({ content, onBack }) => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      component="div"
      onClick={onBack}
    >
      <ArrowBackIcon sx={{ fontSize: '16px' }} />
      <Typography ml="8px" fontSize="14px" fontWeight="bold">
        {content}
      </Typography>
    </Box>
  );
};
