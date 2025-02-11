'use client';

import { useEffect, useState, useTransition } from 'react';
import { useParams } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

import {
  workflowTemplate,
  getEvents,
} from 'services/events';

import Flow from './chart';
import Map from './map';
import styles from './styles.module.css'

const delay = (id: any) => new Promise(resolve => {
  setTimeout(() => {
    workflowTemplate(id).then(res => {
      resolve(res.data);
    });
  }, 200);
});

const toFlow = (nodes: any) => {
  return [];
};
const toMap = (nodes: any) => {
  return [];
};

const Index = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [currentNode, setCurrent] = useState<any>(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await delay(params.id);
      setData(res);
    });
  }, [params]);

  return (
    <>
      {isPending && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      {!isPending && (
        <>
          <Flow
            data={toFlow(data?.node)}
            setNode={setCurrent}
          />
          <Map
            data={toMap(data?.node)}
          />
        </>
      )}
    </>
  );
};

export default Index;
