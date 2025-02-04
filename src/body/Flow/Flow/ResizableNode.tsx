import { useState, memo } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ResizableNode = ({ data }: any) => {
  const [width, setWidth] = useState('180px');
  return (
    <>
      <Accordion
      // style={{ width }}
      // onChange={(_, expanded) => setWidth(expanded ? 'auto' : '180px')}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ whiteSpace: 'nowrap' }}>
            {data.label}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
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