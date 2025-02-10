import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { UserRoleEnum, UserRoles } from 'body/login/constants';

import { Transportation } from '../transportation/Transportation';

import styles from './home.module.css';

interface HomeProps {
  userRole: UserRoleEnum;
}

export const Home: FC<HomeProps> = ({ userRole }) => {
  const user = UserRoles.find((role) => role.value === userRole);

  if (!user) {
    return null;
  }

  return (
    <Box className={styles.container}>
      <Typography component="p" fontSize="16px" mb="16px">
        Welcome,{' '}
        <Typography component="span" fontSize="16px" fontWeight="600">
          John Doe
        </Typography>
      </Typography>
      {user.value === UserRoleEnum.Transportation && <Transportation />}
    </Box>
  );
};
