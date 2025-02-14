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

import { FlowContext } from '../FlowContext';

import ResizableNode from './node';
import { transform } from './utils';
import styles from './styles.module.css';

const LayoutFlow: FC = () => {
  const {
    data,
    currentId,
    setConfig,
    config
  } = useContext(FlowContext) ?? {};
  const { chartConfig, nodes: nodesData } = data || {};

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (nodesData?.length) {
      const orderBySort = orderBy(nodesData, ['sort'], ['asc']);
      const { initialNodes, initialEdges } = transform(orderBySort, `${currentId}`, chartConfig);

      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [data]);

  const getConfig = (_e: React.MouseEvent, node: any) => {
    setConfig({
      ...(config || {}),
      [node.id]: node.position,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {data?.name}
      </div>
      <div className={styles.flow}>
        <ReactFlow
          defaultViewport={{ x: 10, y: 10, zoom: 0.2 }}
          selectionOnDrag={false}
          proOptions={{ hideAttribution: true }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={{ resizableNode: ResizableNode }}
          onNodeDragStop={getConfig}
        />
      </div>
    </div>
  );
};

const Index = () => (
  <ReactFlowProvider>
    <LayoutFlow />
  </ReactFlowProvider>
);

export default Index;
