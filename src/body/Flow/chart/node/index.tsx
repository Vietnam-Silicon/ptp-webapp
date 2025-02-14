import { memo, FC } from 'react';
import { Handle, Position } from '@xyflow/react';

import Image from 'controls/Image';
import styles from './styles.module.css';

interface ResizableNodeProps {
  data: {
    label: string,
    id: number,
    selected?: boolean,
    icon?: { filenameDisk: string },
  };
  selected?: boolean;
};

const Index: FC<ResizableNodeProps> = props => {
  const { data, selected } = props;
  return (
    <div className={`${styles.container} ${selected && styles.selected}`}>
      <Image
        internalAsset={!data?.icon?.filenameDisk}
        src={data?.icon?.filenameDisk as string || '/product-empty.svg'}
        width={48}
        height={48}
        alt={data.label}
      />
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
