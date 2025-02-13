'use client';

import { useContext } from 'react';

import { CircularProgress } from 'components';

import { FlowContext, FlowProdiver } from './FlowContext';
import { MapContext, MapProvider } from './MapContext';

import Chart from './chart';
import Map from './map';
import styles from './styles.module.css';

const FlowContent = () => {
  const { loading } = useContext(FlowContext) ?? {};
  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      {!loading && <Chart />}
    </>
  );
};

const MapContent = () => {
  const { loading } = useContext(MapContext) ?? {};
  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      {!loading && <Map />}
    </>
  );
};

const Index = () => (
  <>
    <FlowProdiver>
      <FlowContent />
    </FlowProdiver>
    <MapProvider>
      <MapContent />
    </MapProvider>
  </>
);

export default Index;
