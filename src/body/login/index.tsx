'use client';

import { ChangeEvent, FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Box, Typography } from 'components';
import { Dropdown, Button } from 'controls';

import { LegendToggle as LegendToggleIcon } from 'components/Icons';

import { UserRoles } from './constants';

import styles from './login.module.css';

export const Login: FC = () => {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const t = useTranslations('home-page');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRole(event.target.value as string);
  };

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const pathName = `home/${role}`;
      router.push(pathName);
    }, 200);
  };

  const optionsDropdown = [
    {
      label: t('user-role.placeholder'),
      value: '',
    },
  ].concat(UserRoles);

  return (
    <Box className={styles.container}>
      <LegendToggleIcon sx={{ width: 80, height: 80 }} />
      <Typography variant="h4" fontSize="28px" fontWeight="bold" sx={{ mb: '72px', mt: '24px' }}>
        {t('app-name')}
      </Typography>
      <Dropdown
        id="user-role"
        name="user-role"
        fullWidth
        value={role}
        label={t('user-role.label')}
        onChange={handleChange}
        menuItems={optionsDropdown}
      />
      <Button
        loading={loading}
        disabled={!role}
        onClick={submit}
        color="secondary"
        variant="contained"
        fullWidth
        sx={{ mt: '24px' }}
      >
        {t('login')}
      </Button>
    </Box>
  );
};
