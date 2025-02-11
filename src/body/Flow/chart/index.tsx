'use client';

import React, { useEffect, FC, useContext } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Edge,
  Node,
} from '@xyflow/react';
import { orderBy } from 'lodash-es';
import '@xyflow/react/dist/style.css';

import { FlowContext } from '../Context';

import ResizableNode from './Node';
import { transform } from './utils';
import styles from './styles.module.css';

const LayoutFlow: FC = () => {
  const { nodes: data } = useContext(FlowContext) ?? {};

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (data?.length) {
      const orderBySort = orderBy(data, ['sort'], ['asc']);
      const { initialNodes, initialEdges } = transform(orderBySort);

      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [data]);

  return (
    <ReactFlow
      selectionOnDrag={false}
      proOptions={{ hideAttribution: true }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={{ resizableNode: ResizableNode }}
    />
  );
};

const Index = () => (
  <div className={styles.container}>
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  </div>
);

export default Index;
