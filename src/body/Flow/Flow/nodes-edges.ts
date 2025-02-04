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



export const returnData = {
  "data": {
    "name": "Chicken Grade A From Farm To Table",
    "description": "A full-flow demonstration of how chicken is traced from The Heaven Farm and The Moon Farm to the end users",
    "chart_config": "{\"some_key\":\"anything\"}",
    "primary_image": {
      "filename_disk": "5968651c-01fa-4dbc-b744-632d2b2121e6.png"
    },
    "nodes": [
      {
        "id": 3,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T08:55:03.536Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-22T10:02:49.475Z",
        "name": "Farm Produced Chicken B",
        "description": "The Chicken Moon Farm produces Chicken.",
        "order_in_workflow": 2,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N3",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": []
      },
      {
        "id": 5,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:26:33.229Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-23T02:44:45.778Z",
        "name": "Chicken Soup Can",
        "description": "A Can Of Chicken Soup",
        "order_in_workflow": null,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N5",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 4,
            "WorkflowNodes_id": 5,
            "related_WorkflowNodes_id": 2,
            "link_text": null
          }
        ]
      },
      {
        "id": 1,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T08:45:57.327Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-22T10:01:41.768Z",
        "name": "Farm Produced Chicken A",
        "description": "The Chicken Heaven Farm is the biggest supplier in the North-East region of Thailand. It raises and produces thousands of chickens every month. The chickens comply with various certificate and quality rules. ",
        "order_in_workflow": 1,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N1",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": []
      },
      {
        "id": 7,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:44:30.655Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-23T02:46:09.529Z",
        "name": "Warehouse",
        "description": "Ground transportation containers to the warehouse, by The Safe Road Logistic Company.",
        "order_in_workflow": null,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N7",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 6,
            "WorkflowNodes_id": 7,
            "related_WorkflowNodes_id": 6,
            "link_text": null
          }
        ]
      },
      {
        "id": 8,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:48:19.313Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-23T02:46:25.078Z",
        "name": "To The Market",
        "description": "From Warehouse to Super Market",
        "order_in_workflow": null,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N8",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 7,
            "WorkflowNodes_id": 8,
            "related_WorkflowNodes_id": 7,
            "link_text": null
          }
        ]
      },
      {
        "id": 9,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:56:25.095Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-23T02:47:04.216Z",
        "name": "Warehouse To Restaurant",
        "description": "chicken soup cans from the warehouse to the restaurant (end user)",
        "order_in_workflow": null,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N9",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 8,
            "WorkflowNodes_id": 9,
            "related_WorkflowNodes_id": 7,
            "link_text": null
          }
        ]
      },
      {
        "id": 4,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:03:48.260Z",
        "user_updated": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_updated": "2025-01-23T02:52:17.576Z",
        "name": "Chicken Wings Box",
        "description": "A box of 1 Kg of fresh chicken wings",
        "order_in_workflow": 4,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N4",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 3,
            "WorkflowNodes_id": 4,
            "related_WorkflowNodes_id": 2,
            "link_text": "Transform"
          }
        ]
      },
      {
        "id": 2,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T08:50:44.591Z",
        "user_updated": "7b095c2b-c9a7-4b32-ace6-a692bfb5bfd7",
        "date_updated": "2025-01-23T07:07:10.364Z",
        "name": "Manufacturer",
        "description": "Manufacture receives the chickens from CP and Cargill farms\nAnd\nTurn a chicken into wings, drumsticks, and chicken soup cans.",
        "order_in_workflow": 3,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N2",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 9,
            "WorkflowNodes_id": 2,
            "related_WorkflowNodes_id": 1,
            "link_text": null
          },
          {
            "id": 10,
            "WorkflowNodes_id": 2,
            "related_WorkflowNodes_id": 3,
            "link_text": null
          }
        ]
      },
      {
        "id": 6,
        "status": "published",
        "sort": null,
        "user_created": "7867a094-c004-44fe-91dc-7a29f58cc6a0",
        "date_created": "2025-01-22T09:35:57.070Z",
        "user_updated": "7b095c2b-c9a7-4b32-ace6-a692bfb5bfd7",
        "date_updated": "2025-01-23T07:43:57.728Z",
        "name": "Packaging",
        "description": "Pack chicken soup cans into boxes, then pack these cans into containers for transportation",
        "order_in_workflow": null,
        "level_in_workflow": null,
        "id_in_workflow": "F001-N6",
        "workflow_template": 1,
        "bind_supplier": null,
        "bind_product": null,
        "parent_nodes": [
          {
            "id": 5,
            "WorkflowNodes_id": 6,
            "related_WorkflowNodes_id": 5,
            "link_text": null
          }
        ]
      }
    ]
  }
}