import React, { useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';

import { initialNodes, initialEdges } from './nodes-edges';
import '@xyflow/react/dist/style.css';

import ResizableNode from './ResizableNode';
import Floating from './SimpleFloating';

const nodeTypes = {
  resizableNode: ResizableNode
};

const getLayoutedElements = (nodes: any, edges: any) => {
  return { nodes, edges };
};

const LayoutFlow = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onLayout = useCallback(() => {
  //   const layouted = getLayoutedElements(nodes, edges);

  //   setNodes([...layouted.nodes]);
  //   setEdges([...layouted.edges]);

  //   window.requestAnimationFrame(() => {
  //     fitView();
  //   });
  // }, [nodes, edges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={{ floating: Floating }}
      fitView
    />
  );
};

const Index = () => (
  <div
    style={{
      width: '100%',
      height: '400px',
      border: '1px solid #E8E8E8',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF'
    }}
  >
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  </div>
);

export default Index;
