import { createContext, ReactNode, useEffect, useState, useTransition } from 'react';
import { useParams } from 'next/navigation';

import {
  getTraceBatch,
} from 'services/events';

interface MapContextType {
  loading: boolean;
  data: any;
}

interface MapProviderProps {
  children: ReactNode;
}

const MapContext = createContext<MapContextType | undefined>({
  loading: false,
  data: [],
});

const delay = (id: any) => new Promise(resolve => {
  setTimeout(() => {
    getTraceBatch(id).then(res => {
      resolve(res.data);
    });
  }, 200);
});

const MapProvider = ({ children }: MapProviderProps) => {
  const { traceId } = useParams<{ traceId: string }>();
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<any>();

  useEffect(() => {
    startTransition(async () => {
      const res = await delay(traceId);
      setData(res);
    });
  }, [traceId]);

  return (
    <MapContext.Provider
      value={{
        loading: isPending,
        data,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
