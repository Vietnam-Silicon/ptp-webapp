import { MarkerType } from '@xyflow/react';
export const initialNodes = [
  {
    id: '1',
    type: 'resizableNode',
    data: { label: 'input' },
    position: { x: -313.957, y: -5.086 },
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position: { x: -36.1423, y: -58.9292 },
    type: 'resizableNode',
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position: { x: 333.51, y: 61.8592 },
    type: 'resizableNode',
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position: { x: 330.379, y: -36.5938 },
    type: 'resizableNode',
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position: { x: 327.588, y: -210.805 },
    type: 'resizableNode',
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position: { x: 594.161, y: -185.169 },
    type: 'resizableNode',
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position: { x: -63.5561, y: 136.265 },
    type: 'resizableNode',
  },
];

export const initialEdges = [
  {
    id: 'e12', source: '1', target: '2', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e13', source: '1', target: '3', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e22a', source: '2', target: '2a', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e22b', source: '2', target: '2b', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e22c', source: '2', target: '2c', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e2c2d', source: '2c', target: '2d', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
  {
    id: 'e2b2d', source: '2b', target: '2c', type: 'floating', markerEnd: {
      type: MarkerType.Arrow, width: 24, height: 24,
    },
  },
];