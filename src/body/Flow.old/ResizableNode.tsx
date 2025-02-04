import { useState, memo } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ResizableNode = ({ data }: any) => {
  const [width, setWidth] = useState('120px');
  return (
    <>
      {/* <NodeResizer /> */}

      <div>
        <Accordion
          style={{ width }}
          onChange={(_, expanded) => setWidth(expanded ? 'auto' : '120px')}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography >{data.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
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