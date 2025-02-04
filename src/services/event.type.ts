interface Recorded {
  id: string;
  status: string;
  sort: string | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name: string;
  description: string;
  logo: string;
  address: string;
  location_latitude: string;
  location_longitude: string;
  type: string[];
  global_location_number: string;
  city: string;
  country: string;
  global_grower_number: string;
  images: number[];
  bind_to_workflow_node: string[];
}

interface MainProduct {
  id: string;
  status: string;
  sort: string | null,
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  brand_name: string;
  name: string;
  global_trade_item_number: string;
  product_type: string[];
  product_state: string;
  compliance_status: string;
  supplier: string;
  grade_code: string;
  country_of_origin: string;
  case_net_weight: number;
  case_gross_weight: number;
  case_dimension: number;
  description: string;
  color: string;
  visual_appearance: string;
  shape: string;
  size: string;
  maturity: string;
  packing_labeling: string;
  primary_image: string;
  trace_code: string;
  images: number[];
  bind_to_workflow_node: string[];
}
interface BindNode {
  id: number;
  status: string;
  sort: string | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name: string;
  description: string;
  order_in_workflow: number;
  level_in_workflow: string | null,
  id_in_workflow: string;
  workflow_template: number
  bind_supplier: string | null;
  bind_product: string | null;
  parent_nodes: number[]
}
export interface Event {
  name: string;
  description: string;
  position_latitude: number;
  position_longitude: number;
  event_time: string;
  unique_code: string;
  patch_code: string;
  recorded_by: Recorded;
  main_product: MainProduct;
  files: {
    id: number;
    Events_id: string;
    directus_files_id: string;
  }
  bind_to_workflow_node: BindNode;
}