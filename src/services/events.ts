import { get, patch } from './requests';

const getEvent = <T>(params: any): Promise<T> => get('/items/Events', { params });

export const eventByUniqueCode = async (code: string): Promise<any> => {
  const data = await getEvent<any>({
    filter: { unique_code: { "_eq": code } },
    fields: [
      "name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,trace_id,files.*,bind_to_workflow_node.*"
    ]
  });
  return data;
};

export const eventByPatchCode = async (code: string): Promise<any> => {
  const data = await getEvent<any>({
    filter: { patch_code: { "_eq": code } },
    fields: [
      "name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,patch_code,files.*,bind_to_workflow_node.*"
    ]
  });
  return data;
};

export const getEvents = async (params: any): Promise<any> => {
  const data = await getEvent<any>(params);
  return data;
}

export const workflowTemplate = async (code: string): Promise<any> => {
  const data = await get(`/items/WorkflowTemplates/${code}`, {
    params: {
      fields: [
        "name,description,chart_config,primary_image.filename_disk,nodes.*,nodes.parent_nodes.*,node.icon.*"
      ]
    }
  });
  return data;
};

export const saveWFTemplate = async (code: string, config: any) => patch(`/items/WorkflowTemplates/${code}`, {
  chart_config: config,
});

export const getTraceBatch = async (code: string): Promise<any> => {
  const data = await getEvent<any>({
    filter: { trace_id: { "_eq": code } },
    fields: [
      "name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,trace_id,files.*,bind_to_workflow_node.*"
    ]
  });
  return data;
};
