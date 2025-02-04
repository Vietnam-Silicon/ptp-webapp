import React, { useContext } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Info from './Info';
import Timeline from './Timeline';
import Map from './Map';
import { PackageContext } from '../index';

const Transition = React.forwardRef((
  props: any & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

const Index = () => {
  const { detail, close } = useContext(PackageContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      open={!!detail}
      onClose={() => close(null)}
      TransitionComponent={Transition}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{ style: { width: '100%', maxWidth: 'none' } }}
    >
      <DialogTitle>Package Information</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1}>
          <Grid size={fullScreen ? 12 : 6}>
            <Info />
          </Grid>
          <Grid size={fullScreen ? 12 : 6}>
            <Timeline />
          </Grid>
        </Grid>
        <Map />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close(null)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Index;
