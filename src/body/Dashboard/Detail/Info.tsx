import { useContext } from 'react';
import { styled } from '@mui/material/styles';

import PTPBox from 'components/PTPBox';
import { StatusColor } from 'mockData/StatusColor';

import { PackageContext } from '../index';

const Info = styled('div')`
  display: flex;
  .label {
    flex-grow: 1;
    white-space: nowrap;
  }
  .value {
    font-weight: 600;
    white-space: nowrap;
  }
`;

const Index = () => {
  const { detail = {} } = useContext(PackageContext);
  return (
    <PTPBox style={{ marginBottom: 12 }}>
      <Info>
        <div className='label'>Tracking No.</div>
        <div className='value'>{detail?.trackingNumber}</div>
      </Info>
      <Info>
        <div className='label'>Lot No.</div>
        <div className='value'>{detail?.lotNo}</div>
      </Info>
      <Info>
        <div className='label'>Name</div>
        <div className='value'>{detail?.name}</div>
      </Info>
      <Info>
        <div className='label'>Plant</div>
        <div className='value'>{detail?.plant}</div>
      </Info>
      <Info>
        <div className='label'>Status:</div>
        <div className='value' style={{ color: StatusColor[detail?.status] }}>
          {detail?.status}
        </div>
      </Info>
      <Info>
        <div className='label'>Cetificate:</div>
        <div className='value'>{detail?.certificate.join(', ')}</div>
      </Info>
      <Info>
        <div className='label'>Organic Standard:</div>
        <div className='value'>{detail?.organicStandard.join(', ')}</div>
      </Info>
      <Info>
        <div className='label'>Weight:</div>
        <div className='value'>{`${detail?.weight.value} (${detail?.weight.unit})`}</div>
      </Info>
    </PTPBox>
  );
};

export default Index;
