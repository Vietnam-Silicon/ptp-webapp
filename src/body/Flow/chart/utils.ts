import { Edge, MarkerType, Node } from '@xyflow/react';

import { NodeResponse } from './index.d';
import { intialPositionX, intialPositionY, distanceX, distanceY } from './constants'

export const transform = (nodes: NodeResponse[] = []): { initialNodes: Node[], initialEdges: Edge[] } => {
    let positionX = intialPositionX;
    let positionY = intialPositionY;
    let currentLevel = 1;
    let orderLevel = 0;

    const { initialNodes, initialEdges } = nodes.reduce((result: {
        initialNodes: Node[];
        initialEdges: Edge[];
    }, item: NodeResponse) => {
        const { parent_nodes, level_in_workflow } = item;

        if (level_in_workflow === currentLevel) {
            positionY += (distanceY * orderLevel);
            orderLevel += 1;
        } else {
            positionY = 50;
            orderLevel = 1;
            positionX += distanceX;
            currentLevel = level_in_workflow;
        }

        result.initialNodes.push({
            id: `${item.id}`,
            data: { label: item.name, id: item.id, selected: item.id === 2 },
            position: { x: item.x ?? positionX, y: item.y ?? positionY },
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

type ParseFlowData = {
    nodes: Node[];
    edges: Edge[];
    viewport: { x: number, y: number, zoom: number };
} | null;

export const parseFlowData = (stringData: string | null): ParseFlowData => {
    try {
        if (!stringData) {
            return null;
        }
        return JSON.parse(stringData);
    } catch {
        return null;
    }
}