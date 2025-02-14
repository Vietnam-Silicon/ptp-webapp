import { EventType } from 'types/Event';
import { get, patch } from './requests';

const _getEvents = (params: unknown) => get<{ data: EventType[] }>('/items/Events', { params });

export const getEvents = async () => {
  const data = await _getEvents({
    fields: [
      'id,unique_code,event_time,status,main_product.name,main_product.description,main_product.primary_image.filename_disk,recorded_by.name,recorded_by.description,recorded_by.logo.filename_disk,recorded_by.address,metadata.*,bind_to_workflow_node.id,trace_id'
    ]
  })
  return data;
}

export const workflowTemplate = async (code: string): Promise<any> => {
  const data = await get(`/items/WorkflowTemplates/${code}`, {
    params: {
      fields: [
        'name,description,chart_config,primary_image.filename_disk,nodes.*,nodes.parent_nodes.*,nodes.icon.*',
      ]
    }
  });
  return data;
};

export const saveWFTemplate = async (code: string, config: any) => patch(`/items/WorkflowTemplates/${code}`, {
  chart_config: config,
});

export const getTraceBatch = async (code: string): Promise<any> => {
  const data = await _getEvents({
    filter: { trace_id: { '_eq': code } },
    fields: [
      'id,name,description,position_latitude,position_longitude,event_time,recorded_by.*,main_product.*,unique_code,trace_id,files.*,bind_to_workflow_node.*',
    ]
  });
  return data;
};
