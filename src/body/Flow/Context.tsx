import { createContext, ReactNode, useEffect, useState, useTransition } from 'react';
import { useParams } from 'next/navigation';

import {
  workflowTemplate,
} from 'services/events';

interface FlowContextType {
  loading: boolean;
  data: any;
  nodes: any;
  currentNode: any | undefined;
  setCurrent: (a: any) => void;
}

interface FlowProdiverProps {
  children: ReactNode;
}

const FlowContext = createContext<FlowContextType | undefined>({
  loading: false,
  data: {},
  nodes: [],
  currentNode: undefined,
  setCurrent: () => { },
});

const delay = (id: any) => new Promise(resolve => {
  setTimeout(() => {
    workflowTemplate(id).then(res => {
      resolve(res.data);
    });
  }, 2000);
});

const FlowProdiver = ({ children }: FlowProdiverProps) => {
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
    <FlowContext.Provider
      value={{
        loading: isPending,
        currentNode: currentNode,
        nodes: data?.nodes,
        data,
        setCurrent,
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

