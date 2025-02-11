import { memo, FC } from 'react';
import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

import styles from './styles.module.css';

interface ResizableNodeProps {
  data: { label: string, id: number, selected?: boolean };
  selected?: boolean;
};

const Index: FC<ResizableNodeProps> = props => {
  const { data, selected } = props;
  return (
    <div className={`${styles.container} ${selected && styles.selected}`}>
      <Image src="/logo.png" width="24" height="24" alt={data.label} />
      {data.label}
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
