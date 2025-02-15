import { createContext, ReactNode, useEffect, useState, useTransition } from 'react';
import { useParams } from 'next/navigation';

import {
  workflowTemplate,
  saveWFTemplate,
} from 'services/events';
import { toCamel } from 'utils/transform';
import {
  safeJSONParse
} from 'utils/jsonTransform';

interface FlowContextType {
  currentId: string;
  loading: boolean;
  data: any;
  config: any;
  setConfig: (a: any) => void;
}

interface FlowProdiverProps {
  children: ReactNode;
}

const FlowContext = createContext<FlowContextType>({
  currentId: '',
  loading: false,
  data: {},
  config: {},
  setConfig: () => { },
});

const delay = (id: any) => new Promise(resolve => {
  setTimeout(() => {
    workflowTemplate(id).then(res => {
      resolve(res.data);
    });
  }, 200);
});

const FlowProdiver = ({ children }: FlowProdiverProps) => {
  const { flowId } = useParams<{ flowId: string }>();
  const [data, setData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    startTransition(async () => {
      const res = await delay(flowId);
      setData(res);
    });
  }, [flowId]);

  useEffect(() => {
    const obj = safeJSONParse(data?.chartConfig);
    const jsonData = toCamel(obj);

    if (Object.keys(config || {}).length > 0) {
      saveWFTemplate(flowId, {
        ...jsonData,
        nodesPosition: {
          ...(jsonData.nodesPosition || {}),
          ...config
        }
      });
    }

  }, [config, flowId, data]);

  return (
    <FlowContext.Provider
      value={{
        currentId: flowId,
        loading: isPending,
        data,
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

