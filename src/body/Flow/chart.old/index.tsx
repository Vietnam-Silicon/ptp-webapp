'use client';

import React, { useState, useEffect, FC } from 'react';
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
import { Popover, Typography } from '@mui/material';
import { orderBy, debounce } from 'lodash-es';

import ResizableNode from './ResizeableNode';
import Floating from './SimpleFloating';
import { flowStorageKey } from './constants';
import { parseFlowData, transform } from './utils';

import '@xyflow/react/dist/style.css';

interface FlowProps {
  data: any;
  setNode: () => void;
}
const LayoutFlow: FC<FlowProps> = (props) => {
  const { data } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance<Node, Edge>>();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { setViewport } = useReactFlow();

  const storeFlowDebounce = debounce((data) => {
    localStorage.setItem(flowStorageKey, JSON.stringify(data));
  }, 1000);

  useEffect(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      storeFlowDebounce(flow);
    }
  }, [rfInstance, storeFlowDebounce]);

  useEffect(() => {
    const flow = parseFlowData(localStorage.getItem(flowStorageKey));

    if (!flow) {
      const orderDataByLevel = orderBy(data, ['level_in_workflow'], ['asc']);
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

  const onNodeClick = (event: any, node: any) => {
    console.log(node);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ReactFlow
        onNodeClick={onNodeClick}
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
      <Popover
        id="basic-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{'title'}</Typography>
      </Popover>
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
