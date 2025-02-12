'use client';

import { Box, Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useParams, useRouter } from 'next/navigation';

export const Successful = () => {
  const params = useParams<{ userRole?: string }>();

  const router = useRouter();

  const onNavigate = () => {
    router.push(`/home/${params.userRole}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        pb: '84px',
      }}
    >
      <DoneIcon sx={{ fontSize: '128px' }} />
      <Box sx={{ my: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography align="center" sx={{ fontSize: '24px' }}>
          Success
        </Typography>
        <Typography align="center" sx={{ fontSize: '20px' }}>
          Your information has been submitted successfully
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ width: '300px', fontSize: '12px', textTransform: 'none' }}
        onClick={onNavigate}
      >
        Continue with other Batch/Lot
      </Button>
    </Box>
  );
};
