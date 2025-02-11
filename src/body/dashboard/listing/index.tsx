'use client';

import clsx from 'clsx';
import { type GridColDef, Table } from 'components';
import dayjs from 'dayjs';
import Image from 'next/image';
import { getAsset } from 'unknown/domainConfig';

import styles from './styles.module.css';
import useEvents, { type Event } from './useEvents';

const DATE_FORMAT = 'MMM dd,yyyy hh:mm'
const columns: GridColDef<Event>[] = [
  { field: 'unique_code', headerName: 'Patch/Lot', width: 200 },
  { field: 'event_time', headerName: 'Event Time', renderCell: ({ row }) => dayjs(row.event_time).format(DATE_FORMAT), width: 200 },
  { field: 'location', renderCell: ({ row }) => row.recorded_by?.address, headerName: 'Location', width: 140 },
  { field: 'type', headerName: 'Type', renderCell: ({ row }) => row.metadata?.length ? row.metadata[0].collection : null, width: 170 },
  {
    display: 'flex',
    field: 'product', headerName: 'Product', renderCell: ({ row }) => (<div className={styles.product}>
      {row?.main_product.primary_image?.filename_disk ?
        <Image src={getAsset(row?.main_product.primary_image?.filename_disk)} alt='' width={32} height={32} />
        :
        <Image src='./product-empty.svg' alt='' width={32} height={32} />
      }
      <div><div className={styles.productTitle}>{row?.main_product.name}</div><div className={styles.productDes}>{row?.main_product.description}</div></div>
    </div>),
    sortable: false,
    width: 200
  },
  { display: 'flex', field: 'status', renderCell: ({ row }) => <Status status={row?.status} />, headerName: 'Status', width: 100, sortable: false, },
  {
    display: 'flex',
    field: 'supplier', headerName: 'Suppliers', renderCell: ({ row }) => (<div className={styles.supplier}>
      {row?.recorded_by.logo?.filename_disk ?
        <Image src={getAsset(row?.recorded_by.logo?.filename_disk)} alt='' width={32} height={32} />
        :
        <Image src='./supplier-empty.svg' alt='' width={32} height={32} />
      }
      <div><div className={styles.supplierTitle}>{row?.recorded_by.name}</div><div className={styles.supplierDes}>{row?.recorded_by.description}</div></div>
    </div>),
    sortable: false,
    width: 200
  }
];

const paginationModel = { page: 0, pageSize: 5 };

const MAPPING_STATUS = {
  success: styles.success,
  pending: styles.pending,
  issue: styles.issue,
  warning: styles.warning,
  default: styles.default
}
const Status = ({ status }: { status: string }) => {
  return <div className={clsx(styles.status, MAPPING_STATUS[status as keyof typeof MAPPING_STATUS] ?? MAPPING_STATUS.default)}>{status}</div>
}

const Index = () => {
  const { data, loading } = useEvents()

  return (
    <Table
      loading={loading}
      rows={data}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
      classes={{ columnHeaderTitle: styles.columnHeaderTitle, cell: styles.cell }}
      rowHeight={100}
    />
  );
}

export default Index
