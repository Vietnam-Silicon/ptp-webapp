import React, { useState, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MarkerType,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { eventByUniqueCode, workflowTemplate } from 'services/event';

import { initialNodes, initialEdges, returnData } from './nodes-edges';
import ResizableNode from './ResizableNode';
import Floating from './SimpleFloating';

const transform = (nodes: any = []): any => {
  const { initialNodes, initialEdges } = nodes.reduce((result: any, item: any) => {
    const { parent_nodes } = item;

    result.initialNodes.push({
      id: `${item.id}`,
      data: { label: item.name },
      position: { x: item.x || 0, y: item.y || 0 },
      type: 'resizableNode',
    });

    const edges: any = parent_nodes.map((i: any) => ({
      id: `${i.id}`,
      source: `${i.related_WorkflowNodes_id}`,
      target: `${i.WorkflowNodes_id}`,
      type: 'floating',
      markerEnd: { type: MarkerType.Arrow, width: 24, height: 24 },
    }));
    result.initialEdges = result.initialEdges.concat(edges);

    return result;
  }, { initialNodes: [], initialEdges: [] });

  return { initialNodes, initialEdges };
};

const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);

  useEffect(() => {
    // workflowTemplate(1).then(res => {
    //   const { nodes = [] } = res?.data || {};
    //   const { initialNodes, initialEdges } = transform(nodes);
    //   setNodes(initialNodes);
    //   setEdges(initialEdges);
    // });
    // setNodes(initialNodes);
    // setEdges(initialEdges);
    const { initialNodes, initialEdges } = transform(returnData.data.nodes);
    setNodes(initialNodes);
    setEdges(initialEdges);

  }, []);

  return (
    <>
      <ReactFlow
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
      backgroundColor: '#FFFFFF'
    }}
  >
    <ReactFlowProvider>
      <LayoutFlow />
    </ReactFlowProvider>
  </div>
);

export default Index;
