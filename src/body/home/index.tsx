'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

import { Box, Typography } from 'components';
import { UserRoleEnum, UserRoles } from 'body/login/constants';
import { Transportation } from 'body/transportation/Transportation';
import { Farmer } from 'body/farmer/Farmer';
import { Receiving } from 'body/receiving/Receiving';

import styles from './home.module.css';

export const Home: FC = () => {
  const params = useParams();
  const router = useRouter();
  const userRole = params.userRole;

  const user = UserRoles.find((role) => role.value === userRole);

  if (!user) {
    router.push('/');
    return null;
  }

  const pageMapper = new Map([
    [UserRoleEnum.LogisticTruckFarm, <Transportation key={UserRoleEnum.LogisticTruckFarm} />],
    [UserRoleEnum.Farmer, <Farmer key={UserRoleEnum.Farmer} />],
    [UserRoleEnum.AggregatorReceiving, <Receiving key={UserRoleEnum.AggregatorReceiving} />],
  ]);

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
      {pageMapper.get(user.value)}
    </Box>
  );
};
