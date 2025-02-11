import { createContext, ReactNode, useEffect, useState, useTransition } from 'react';
import { useParams } from 'next/navigation';

import {
  workflowTemplate,
  saveWFTemplate,
} from 'services/events';
import {
  safeJSONParse
} from 'unknown/jsonTransform';

interface FlowContextType {
  currentId: string;
  loading: boolean;
  data: any;
  currentNode: any | undefined;
  setCurrent: (a: any) => void;
  config: any;
  setConfig: (a: any) => void;
}

interface FlowProdiverProps {
  children: ReactNode;
}

const FlowContext = createContext<FlowContextType | undefined>({
  currentId: '',
  loading: false,
  data: {},
  currentNode: undefined,
  setCurrent: () => { },
  config: {},
  setConfig: () => { },
});

const delay = (id: any) => new Promise(resolve => {
  setTimeout(() => {
    workflowTemplate(id).then(res => {
      resolve(res.data);
    });
  }, 0);
});

const FlowProdiver = ({ children }: FlowProdiverProps) => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [currentNode, setCurrent] = useState<any>(null);
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    startTransition(async () => {
      const res = await delay(params.id);
      setData(res);
    });
  }, [params]);

  useEffect(() => {
    const jsonData = safeJSONParse(data?.chart_config);

    if (Object.keys(config || {}).length > 0) {
      saveWFTemplate(params.id, {
        ...jsonData,
        nodesPosition: {
          ...(jsonData.nodesPosition || {}),
          ...config
        }
      });
    }

  }, [config, params.id, data]);

  return (
    <FlowContext.Provider
      value={{
        currentId: params.id,
        loading: isPending,
        currentNode: currentNode,
        data,
        setCurrent,
        config,
        setConfig,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export type {
  FlowContextType,
};

export {
  FlowContext,
  FlowProdiver,
};

