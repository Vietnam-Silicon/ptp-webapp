import { get } from './requests';

const getEvent = <T>(params: any): Promise<T> => get('/items/Events', { params });

export const eventByUniqueCode = async (code: string): Promise<any> => {
  const data = await getEvent<any>({
    filter: { unique_code: { '_eq': code } },
    fields: [
      'name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,patch_code,files.*,bind_to_workflow_node.*'
    ]
  });
  return data;
};

export const eventByPatchCode = async (code: string): Promise<any> => {
  const data = await getEvent<any>({
    filter: { patch_code: { '_eq': code } },
    fields: [
      'name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,patch_code,files.*,bind_to_workflow_node.*'
    ]
  });
  return data;
};

export const getEvents = async <T>(): Promise<any> => {
  const data = await getEvent<T>({
    fields: 'id,unique_code,event_time,status,main_product.name,main_product.description,main_product.primary_image.filename_disk,recorded_by.name,recorded_by.description,recorded_by.logo.filename_disk,recorded_by.address,metadata.*,bind_to_workflow_node.id,trace_id'
  });
  return data;
}

export const workflowTemplate = async (code: string): Promise<any> => {
  const data = await get(`/items/WorkflowTemplates/${code}`, {
    params: {
      fields: [
        'name,description,chart_config,primary_image.filename_disk,nodes.*,nodes.parent_nodes.*'
      ]
    }
  });
  return data;
};