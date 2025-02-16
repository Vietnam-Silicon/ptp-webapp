import { Edge, MarkerType, Node } from '@xyflow/react';

import { toCamel } from 'utils/transform';
import {
  safeJSONParse
} from 'utils/jsonTransform';

import { NodeResponse } from 'types/FlowNode';

const edgeColor: string = '#3399ff';

export const transform = (nodes: NodeResponse[] = [], currentId: string, chartConfig: any): { initialNodes: Node[], initialEdges: Edge[] } => {

  const obj = safeJSONParse(chartConfig);
  const { nodesPosition = {} } = toCamel(obj);

  const { initialNodes, initialEdges } = nodes.reduce((result: {
    initialNodes: Node[];
    initialEdges: Edge[];
  }, item: NodeResponse) => {
    const { parentNodes = [] } = item;

    result.initialNodes.push({
      id: `${item.id}`,
      data: {
        ...item,
        label: item.name, id: item.id,
        selected: `${item.id}` === currentId,
      },
      position: {
        x: nodesPosition[item.id]?.x || 0,
        y: nodesPosition[item.id]?.y || 0,
      },
      type: 'resizableNode',
    });

    const edges: Edge[] = parentNodes.map((i) => ({
      id: `${i.id}`,
      source: `${i.relatedWorkflowNodesId}`,
      target: `${i.WorkflowNodesId}`,
      type: "smoothstep",
      animated: true,
      style: {
        stroke: edgeColor,
        strokeWidth: 2,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: edgeColor,
      },
    }));
    result.initialEdges = result.initialEdges.concat(edges);

    return result;
  }, { initialNodes: [], initialEdges: [] });
  return { initialNodes, initialEdges };
};
