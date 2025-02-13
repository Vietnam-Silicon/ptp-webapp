import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawerOrigin from '@mui/material/SwipeableDrawer';
import { Box } from '../Box';

const drawerBleeding = 0;

interface SwipeableDrawerProps {
  open: boolean;
  toggleDrawer: (value: boolean) => void;
  children?: ReactNode;
}

export const SwipeableDrawer = (props: SwipeableDrawerProps) => {
  const { open, toggleDrawer, children } = props;

  return (
    <Box component="div" sx={{ backgroundColor: '#f5f5f5' }}>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: '200px',
            overflow: 'visible',
            borderRadius: '16px',
          },
        }}
      />
      <SwipeableDrawerOrigin
        anchor="bottom"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Box
            component="div"
            sx={{
              width: '40px',
              height: '10px',
              backgroundColor: 'gray',
              position: 'absolute',
              top: 8,
              left: 'calc(50% - 15px)',
              borderRadius: '16px',
            }}
          />
          <Box
            component="div"
            sx={{
              width: '100%',
              position: 'absolute',
              top: -0,
              left: 0,
              mt: '24px',
            }}
          >
            {children}
          </Box>
        </Box>
      </SwipeableDrawerOrigin>
    </Box>
  );
};
