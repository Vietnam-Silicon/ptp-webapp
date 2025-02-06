import { memo, FC } from 'react';
import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';
import {
  Box,
  Card,
  Typography,
} from '@mui/material';

interface ResizableNodeProps {
  data: { label: string, id: number, selected?: boolean };
}

const ResizableNode: FC<ResizableNodeProps> = ({ data }) => {
  return (
    <>
      <Card sx={{
        whiteSpace: 'nowrap', border: '1px solid black',
        borderRadius: '8px', padding: '8px', backgroundColor: data.selected ? '#d3d0d9' : 'white',
        display: 'flex',
        gap: '8px',
        height: '100px',
        width: '220px',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image src="./file.svg" width="40" height="40" alt='image' />
        </Box>
        <Typography fontSize={12} style={{textWrap: 'wrap'}}>
          {data.label}
        </Typography>
      </Card>

      <Handle type="target"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Left}
      />
      <Handle type="source"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Right}
      />
      <Handle type="source"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Top}
      />
      <Handle type="source"
        style={{ border: 0, minWidth: 0, minHeight: 0, width: 0, height: 0 }}
        position={Position.Bottom}
      />
    </>
  );
};

export default memo(ResizableNode);