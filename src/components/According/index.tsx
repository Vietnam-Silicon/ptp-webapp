'use-client';

import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type AccordingData = Array<{ label: string; content: string; description?: string }>;

interface AccordingProps {
  title: string;
  data: AccordingData;
}

export const According: FC<AccordingProps> = (props) => {
  const { title, data } = props;

  return (
    <Box component="div">
      <Accordion sx={{ backgroundColor: '#FFFAFA', margin: '0' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="16px" fontWeight="bold" component="p">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingTop: 0,
          }}
        >
          {data.map((it) => (
            <Box component="div" key={it.label}>
              <Typography fontSize="12px" color="text.secondary">
                {it.label}
              </Typography>
              <Typography fontSize="14px">{it.content}</Typography>
              {it.description && (
                <Typography fontSize="12px" color="text.secondary">
                  {it.description}
                </Typography>
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
