import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AttachMoney,
  LocalShipping,
  HourglassBottom,
} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import PTPBox from 'components/PTPBox';

const Info = styled('div')`
  display: flex;
  flex-direction: row;
  .grow {
    flex-grow: 1;
    flex-direction: column;
  }
  .title {
    color: #67748e;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: capitalize;
    vertical-align: unset;
  }
  .value {
    color: #344767;
    font-weight: 700;
    margin-bottom: 8px;
    opacity: 1;
    text-transform: none;
    vertical-align: unset;
    font-size: 1.25rem;
  }
  .up {
    color: #2dce89;
    font-size: 0.875rem;
    align-items: center;
    opacity: 1;
    text-transform: none;
    vertical-align: unset;
    margin-right: 4px;
    display: flex;
    place-items: center;
    font-weight: 600;
  }
  .down {
    color: #f5365c;
    font-size: 0.875rem;
    align-items: center;
    opacity: 1;
    text-transform: none;
    vertical-align: unset;
    margin-right: 4px;
    display: flex;
    place-items: center;
    font-weight: 600;
  }
`;

const Index = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid size={fullScreen ? 24 : 8}>
          <PTPBox>
            <Info>
              <Info className='grow'>
                <div className="title">Monthly GMV</div>
                <div className='value'>$53,000</div>
              </Info>
              <Info>
                <AttachMoney />
              </Info>
            </Info>
            <Info>
              <div className='down'>-10%</div>
              since last month
            </Info>
          </PTPBox>
        </Grid>
        <Grid size={fullScreen ? 24 : 8}>
          <PTPBox>
            <Info>
              <Info className='grow'>
                <div className="title">Delivering</div>
                <div className='value'>10.560 orders</div>
              </Info>
              <Info>
                <LocalShipping />
              </Info>
            </Info>
            <Info>
              <div className='down'>1.456</div>
              waiting orders
            </Info>
          </PTPBox>
        </Grid>
        <Grid size={fullScreen ? 24 : 8}>
          <PTPBox>
            <Info>
              <Info className='grow'>
                <div className="title">Delivered</div>
                <div className='value'>15.467 orders</div>
              </Info>
              <Info>
                <HourglassBottom />
              </Info>
            </Info>
            <Info>
              <div className='up'>+5.6%</div>
              since last month
            </Info>
          </PTPBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
