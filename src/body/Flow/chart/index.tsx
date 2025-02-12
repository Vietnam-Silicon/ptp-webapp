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
  const { chart_config: chartConfig, nodes: nodesData } = data || {};

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
      ...config,
      [node.id]: node.position,
    });
  }

  return (
    <ReactFlow
      selectionOnDrag={false}
      proOptions={{ hideAttribution: true }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={{ resizableNode: ResizableNode }}
      onNodeDragStop={getConfig}
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
