import { Edge, MarkerType, Node } from '@xyflow/react';

import {
  safeJSONParse
} from 'unknown/jsonTransform';

import { NodeResponse } from './index.d';

export const transform = (nodes: NodeResponse[] = [], currentId: string, chartConfig: any): { initialNodes: Node[], initialEdges: Edge[] } => {

  const { nodesPosition = {} } = safeJSONParse(chartConfig);

  const { initialNodes, initialEdges } = nodes.reduce((result: {
    initialNodes: Node[];
    initialEdges: Edge[];
  }, item: NodeResponse) => {
    const { parent_nodes = [] } = item;

    result.initialNodes.push({
      id: `${item.id}`,
      data: { label: item.name, id: item.id, selected: `${item.id}` === currentId },

      position: {
        x: nodesPosition[item.id]?.x || 0,
        y: nodesPosition[item.id]?.y || 0,
      },
      type: 'resizableNode',
    });

    const edges: Edge[] = parent_nodes.map((i) => ({
      id: `${i.id}`,
      source: `${i.related_WorkflowNodes_id}`,
      target: `${i.WorkflowNodes_id}`,
      markerEnd: { type: MarkerType.Arrow, width: 24, height: 24 },
    }));
    result.initialEdges = result.initialEdges.concat(edges);

    return result;
  }, { initialNodes: [], initialEdges: [] });
  return { initialNodes, initialEdges };
};
