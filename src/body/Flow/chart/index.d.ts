export type ParentNode = {
  id: number;
  relatedWorkflowNodesId: number;
  WorkflowNodesId: number;
  linkText: string | null;
};

export type NodeResponse = {
  id: number;
  name: string;
  status: string;
  sort: string | null;
  x?: number;
  y?: number;
  userCreated: string;
  dateCreated: string;
  userUpdated: string;
  dateUpdated: string;
  description: string;
  orderInWorkflow: number | null;
  idInWorkflow: string;
  levelInWorkflow: number;
  workflowTemplate: number;
  bindSupplier?: null;
  bindSroduct?: null;
  parentNodes: ParentNode[];
};

export type ReturnData = {
  data: {
    name: string;
    description: string;
    chartConfig: string;
    primaryImage: {
      filenameDisk: string;
    };
    nodes: NodeResponse[];
  };
};
