import { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ApartmentIcon from '@mui/icons-material/Apartment';

interface InfoCardProps {
  title: string;
  description: string;
  code: string;
}

export const InfoCard: FC<InfoCardProps> = ({ title, description, code }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#EEEEEE',
        borderRadius: '8px',
        p: '8px',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <ApartmentIcon sx={{ width: '80px', height: '80px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="p" fontSize="16px">
            {title}
          </Typography>
          <Typography component="p" fontSize="12px" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pt: '8px' }}>
            <LocalShippingIcon sx={{ width: '28px', height: '28px' }} />
            <Typography component="p" fontSize="12px" ml="8px">
              {code}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
