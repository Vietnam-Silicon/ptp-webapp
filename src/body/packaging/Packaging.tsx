'use client';

import { FC, useState } from 'react';

import {
  InfoCard,
  ScanModal,
  Typography,
  Box,
  SwipeableDrawer,
  ListItemText,
  MenuItem,
  MenuList,
} from 'components';
import { AddOutlined as AddOutlinedIcon, ArrowRight, LocationOn } from 'components/Icons';
import { Button } from 'controls';
import { pgInputInfoRoute } from 'routes/packaging';
import useUpdateQueryParam from 'hooks/useUpdateQueyParam';

enum EScanType {
  Box = 1,
  Pallet = 2,
  Container = 3,
}

export const Packaging: FC = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [scanType, setShowScanType] = useState<EScanType>();
  const updateQueyParam = useUpdateQueryParam();

  const menuItems = [
    { label: 'Box', value: EScanType.Box },
    { label: 'Pallet', value: EScanType.Pallet },
    { label: 'Container', value: EScanType.Container },
  ];

  const onCloseModal = () => {
    setShowScanModal(false);
  };

  const onClickItem = (value: EScanType) => {
    setShowScanType(value);
    setShowScanModal(true);
  };

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
    }
  };

  const goNextPage = (value: string) => {
    switch (scanType) {
      case EScanType.Box:
        updateQueyParam('cratedId', value, pgInputInfoRoute);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '800px' }}
      >
        <InfoCard
          title="Nonthaburi Durian"
          description="North of Chanthaburi City on Hwy 317"
          customDescription={
            <Box component="div" sx={{ display: 'flex', gap: '24px', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn />
                <Typography component="p" fontSize="12px" ml="8px">
                  HGKJAHHKJG
                </Typography>
              </Box>
            </Box>
          }
        />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '24px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <Button
          onClick={() => setShowDrawer(true)}
          startIcon={<AddOutlinedIcon />}
          variant="contained"
          sx={{ backgroundColor: '#eeeeee', color: 'black', height: '56px', borderRadius: '16px' }}
        >
          Scan
        </Button>
      </Box>
      <ScanModal onScan={onScan} open={showScanModal} onClose={onCloseModal} />
      <SwipeableDrawer toggleDrawer={setShowDrawer} open={showDrawer}>
        <MenuList sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {menuItems.map((it) => (
            <MenuItem key={it.value} onClick={() => onClickItem(it.value)}>
              <ListItemText>{it.label}</ListItemText>
              <ArrowRight />
            </MenuItem>
          ))}
        </MenuList>
      </SwipeableDrawer>
    </>
  );
};
