'use client';

import { FC, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';

import { UserRoles } from './constants';

import styles from './login.module.css';

export const Login: FC = () => {
  const [role, setRole] = useState('');
  const router = useRouter();

  const t = useTranslations('home-page');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const submit = () => {
    const pathName = `home/${role}`;
    router.push(pathName);
  };

  return (
    <Box className={styles.container}>
      <LegendToggleIcon sx={{ width: 80, height: 80 }} />
      <Typography variant="h4" fontSize="28px" fontWeight="bold" sx={{ mb: '72px', mt: '24px' }}>
        {t('app-name')}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="home-user-role">{t('user-role.label')}</InputLabel>
        <Select
          labelId="home-user-role"
          id="home-user-role"
          value={role}
          label={t('user-role.label')}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>{t('user-role.placeholder')}</em>
          </MenuItem>
          {UserRoles.map((userRole) => (
            <MenuItem key={userRole.value} value={userRole.value}>
              {userRole.label}
            </MenuItem>
          ))}
        </Select>
        <Button
          disabled={!role}
          onClick={submit}
          color="secondary"
          variant="contained"
          fullWidth
          sx={{ mt: '24px' }}
        >
          {t('login')}
        </Button>
      </FormControl>
    </Box>
  );
};
