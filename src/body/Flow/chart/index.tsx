'use client';

import React, { useState, useEffect, FC, useContext } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Edge,
  Node,
  MiniMap,
} from '@xyflow/react';
import { orderBy } from 'lodash-es';
import '@xyflow/react/dist/style.css';

import { FlowContext } from '../FlowContext';

import ResizableNode from './node';
import Info from './info';
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
  const [selectedNode, setNode] = useState<any>(null);

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
  };

  const onNodeClick = (_event: any, node: any) => {
    setNode(node);
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {data?.name}
      </div>
      <div className={styles.flow}>
        <ReactFlow
          defaultViewport={{ x: 10, y: 10, zoom: 1 }}
          selectionOnDrag={false}
          onNodeClick={onNodeClick}
          proOptions={{ hideAttribution: true }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={{ resizableNode: ResizableNode }}
          onNodeDragStop={getConfig}
        >
          <MiniMap style={{ background: '#fff' }} />
        </ReactFlow>
      </div>
      {selectedNode && (
        <Info
          node={selectedNode}
          onClose={() => setNode(null)}
        />
      )}
    </div>
  );
};

const Index = () => (
  <ReactFlowProvider>
    <LayoutFlow />
  </ReactFlowProvider>
);

export default Index;
