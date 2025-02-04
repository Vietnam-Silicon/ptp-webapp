import { createContext, useState } from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Inventory from '@mui/icons-material/Inventory';
import { blueGrey } from '@mui/material/colors';
import { styled } from "@mui/material/styles";

import { StatusColor } from 'mockData/StatusColor';

import Detail from './Detail';
import Panels from './Panels';
import { packages } from 'mockData/data';

const StyledCell = styled('div')`
  display: flex;
  place-items: center;
  gap: 8px;
  cursor: pointer;
  .no {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }
  .name {
    color: ${blueGrey[500]};
  }
`;

export const PackageContext = createContext<any | undefined>(undefined);

const Item = (props: any) => (
  <StyledCell>
    {props.icon && props.icon}
    <div className="no">
      <span className='name'>{props.name}</span>
      <span
        className="main"
        style={{ color: StatusColor[props.value], ...props.mainStyle }}
      >
        {props.value}
      </span>
    </div>
  </StyledCell>
);

const Index = () => {
  const [detail, setDetail] = useState<any>(packages[0]);

  return (
    <PackageContext.Provider value={{ detail, close: setDetail }}>
      <Panels />
      <TableContainer>
        <Table>
          <TableBody>
            {packages.map((item: any, idx: number) => (
              <TableRow key={idx} onClick={() => setDetail(item)}>
                <TableCell>
                  <Item
                    icon={<Inventory />}
                    name="Tracking No."
                    value={item.trackingNumber}
                    mainStyle={{ fontWeight: 600 }}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    icon={<Inventory />}
                    name="Lot No."
                    value={item.lotNo}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    name="Name:"
                    value={item.name}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    name="Cetificate:"
                    value={item.certificate.join(', ')}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    name="Expired Date:"
                    value={item.expiredDate}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    name="Plant:"
                    value={item.plant}
                  />
                </TableCell>
                <TableCell>
                  <Item
                    name="Status:"
                    value={item.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Detail />
    </PackageContext.Provider>
  );
};

export default Index;
