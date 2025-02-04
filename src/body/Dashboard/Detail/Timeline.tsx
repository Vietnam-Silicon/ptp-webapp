import { useContext } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import { PackageContext } from '../index';


const Index = () => {
  const { detail } = useContext(PackageContext);
  const { location = [] } = detail || {};
  return (
    <Timeline>
      {location.map((item: any) => (
        <TimelineItem key={item.city}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{item.city}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Index;
