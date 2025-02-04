import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Camera from './Camera';
import PackageInfo from './PackageInfo';

const Index = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [showScan, setScan] = useState(false);
  const [barCode, setCode] = useState(null);

  return (
    <>
      <Grid container spacing={1} >
        <Grid size={fullScreen ? 10 : 12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Bar Code</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              label="Bar Code"
            />
          </FormControl>
        </Grid>
        {fullScreen && (
          <Grid
            size={2}
            style={{
              display: 'flex',
              placeContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => setScan(true)}
          >
            <DocumentScanner fontSize="large" />
          </Grid>
        )}
        <Grid size={fullScreen ? 12 : 6}>
          <Button variant="contained" size='large'>Enter</Button>
        </Grid>
      </Grid>
      <Camera
        open={showScan}
        close={() => setScan(false)}
        getData={(data: any) => setCode(data)}
      />
      <div style={{ height: 24 }} />
      <PackageInfo />
    </>
  );
};

export default Index;
