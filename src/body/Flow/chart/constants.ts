import { ReturnData, ParentNode } from './index.d';

export const intialPositionX = 20;
export const intialPositionY = 50;
export const distanceY = 120;
export const distanceX = 250;
export const flowStorageKey = 'xyflow-data';

export const returnData: ReturnData = {
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
                "level_in_workflow": 1,
                "id_in_workflow": "F001-N3",
                "workflow_template": 1,
                "bind_supplier": null,
                "bind_product": null,
                "parent_nodes": [] as ParentNode[],
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
                "order_in_workflow": 2,
                "level_in_workflow": 3,
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
                "level_in_workflow": 1,
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
                "order_in_workflow": 6,
                "level_in_workflow": 5,
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
                "order_in_workflow": 7,
                "level_in_workflow": 6,
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
                "order_in_workflow": 9,
                "level_in_workflow": 6,
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
                "level_in_workflow": 3,
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
                "level_in_workflow": 2,
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
                "order_in_workflow": 2,
                "level_in_workflow": 4,
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