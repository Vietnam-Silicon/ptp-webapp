'use client';

import { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { FlowContext, FlowProdiver } from './Context';

import Chart from './chart';
import Map from './map';
import styles from './styles.module.css';

const Content = () => {
  const { loading } = useContext(FlowContext) ?? {};
  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <>
          <Chart />
          {/* <Map /> */}
        </>
      )}
    </>
  );
};

const Index = () => (
  <FlowProdiver>
    <Content />
  </FlowProdiver>
);

export default Index;
