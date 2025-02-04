import { get } from './request';
import { Event } from './event.type';

export const eventByUniqueCode = async (code: string): Promise<any> => {
  const data = await get('/items/Events', {
    // const data = await get('/facts', {
    params: {
      filter: { unique_code: { "_eq": code } },
      fields: [
        "name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,patch_code,files.*,bind_to_workflow_node.*"
      ]
    }
  });
  return data;
};

export const workflowTemplate = async (code: any): Promise<any> => {
  const data = await get(`/items/WorkflowTemplates/${code}`, {
    params: {
      fields: [
        "name,description,chart_config,primary_image.filename_disk,nodes.*,nodes.parent_nodes.*"
      ]
    }
  });
  return data;
};

export const eventByPatchCode = async (code: string): Promise<any> => {
  const data = await get('/items/Events', {
    params: {
      filter: { patch_code: { "_eq": code } },
      fields: [
        "name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,patch_code,files.*,bind_to_workflow_node.*"
      ]
    }
  });
  return data;
}
