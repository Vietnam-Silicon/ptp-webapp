
'use client'

import React, { useState, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  ReactFlowInstance,
  useReactFlow,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { orderBy, debounce } from 'lodash-es';

import ResizableNode from './ResizeableNode';
import Floating from './SimpleFloating';
import { returnData, flowStorageKey } from './constants';
import { parseFlowData, transform } from './utils';

const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance<Node, Edge>>();
  const { setViewport } = useReactFlow();

  const storeFlowDebounce = debounce((data) => {
    localStorage.setItem(flowStorageKey, JSON.stringify(data));
  }, 1000);

  useEffect(() => {

    if (rfInstance) {
      const flow = rfInstance.toObject();
      storeFlowDebounce(flow);

    }

  }, [rfInstance, storeFlowDebounce])

  useEffect(() => {

    const flow = parseFlowData(localStorage.getItem(flowStorageKey));

    if (!flow) {
      const orderDataByLevel = orderBy([...returnData.data.nodes], ['level_in_workflow'], ['asc']);
      const { initialNodes, initialEdges } = transform(orderDataByLevel);
      setNodes(initialNodes);
      setEdges(initialEdges);
      return;
    }

    const { nodes, edges, viewport } = flow;

    const { x = 0, y = 0, zoom = 1 } = viewport;

    setNodes(nodes);
    setEdges(edges);
    setViewport({ x, y, zoom });

  }, [setNodes, setEdges, setViewport]);

  return (
    <>
      <ReactFlow
        selectionOnDrag={false}
        onInit={setRfInstance}
        proOptions={{ hideAttribution: true }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={{ resizableNode: ResizableNode }}
        edgeTypes={{ floating: Floating }}
      />
    </>
  );
};

const Index = () => (
  <div
    style={{
      width: '100%',
      height: '400px',
      border: '1px solid #E8E8E8',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
    }}
  >
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  </div>
);

export default Index;
