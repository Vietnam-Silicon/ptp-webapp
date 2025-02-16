import { memo, FC } from 'react';
import { Handle, Position } from '@xyflow/react';

import Image from 'controls/Image';
import styles from './styles.module.css';

interface ResizableNodeProps {
  data: {
    label: string;
    id: number;
    selected?: boolean;
    icon?: { filenameDisk: string };
    description: string;
  };
  selected?: boolean;
};

const defaultIcon: string = '📦';
const icons: Record<string, string> = {
  farm: '🌾',
  transport: '🚛',
  manufacturer: '🏭',
  packaging: '📦',
  warehouse: '🏪',
  customs: '🏢',
  retail: '🏪',
  aggregator: '🏢',
  distributor: '🏬',
  logistics: '🚢'
};

const getIcon = (label: string): string => {
  if (!label) return defaultIcon;
  const str = label.toLowerCase();
  if (str.includes('farm')) return icons.farm;
  if (str.includes('transport')) return icons.transport;
  if (str.includes('customs')) return icons.customs;
  if (str.includes('retail')) return icons.retail;
  if (str.includes('packaging')) return icons.packaging;
  if (str.includes('warehouse')) return icons.warehouse;
  if (str.includes('aggregator')) return icons.aggregator;
  if (str.includes('distributor')) return icons.distributor;
  if (str.includes('logistics')) return icons.logistics;
  return defaultIcon;
};

const Index: FC<ResizableNodeProps> = props => {
  const { data, selected } = props;
  return (
    <div className={`${styles.container} ${selected && styles.selected}`}>
      <div className={styles.icon}>{getIcon(data.label)}</div>
      <div className={styles.label}>{data.label}</div>
      <div className={styles.desc}>{data.description}</div>
      <Handle type="target"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Left}
      />
      <Handle type="source"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Right}
      />
    </div>
  );
};

export default memo(Index);
