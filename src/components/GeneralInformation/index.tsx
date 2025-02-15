import { FC } from 'react';

import { Box } from 'components/Box';
import { Typography } from 'components/Typography';

interface GeneralInformationProps {
  title: string;
  description: string;
  content: string;
}

export const GeneralInformation: FC<GeneralInformationProps> = ({
  title,
  content,
  description,
}) => (
  <Box
    component="div"
    sx={{
      width: '100%',
      height: '100px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #eeeeee',
      minWidth: '100px',
    }}
  >
    <Typography fontWeight="500" fontSize="26px">
      {title}
    </Typography>
    <Typography color="text.secondary" fontSize="12px">
      {description}
    </Typography>
    <Typography fontSize="14px">{content}</Typography>
  </Box>
);
