'use client';

import { useEffect } from 'react';

import { getEvents } from 'services/events';

import Flow from './chart';
import Map from './map';

const Index = () => {
  useEffect(() => {
    getEvents({}).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <div>aaaa</div>
      <Flow />
      <Map />
    </>
  );
};

export default Index;
