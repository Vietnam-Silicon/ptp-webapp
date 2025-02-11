export type ParentNode = {
  id: number;
  related_WorkflowNodes_id: number;
  WorkflowNodes_id: number;
  link_text: string | null;
}

export type NodeResponse = {
  id: number;
  name: string;
  status: string;
  sort: string | null;
  x?: number;
  y?: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  description: string;
  order_in_workflow: number | null;
  id_in_workflow: string;
  level_in_workflow: number;
  workflow_template: number;
  bind_supplier?: null;
  bind_product?: null;
  parent_nodes: ParentNode[];
};

export type ReturnData = {
  data: {
    name: string;
    description: string;
    chart_config: string;
    primary_image: {
      filename_disk: string;
    };
    nodes: NodeResponse[];
  };
}