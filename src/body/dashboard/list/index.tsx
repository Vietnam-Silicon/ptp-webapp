'use client';

import clsx from 'clsx'
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { Box, type GridColDef, GridRowParams, Table } from 'components';
import { DatePicker, DebounceInput, MenuItem, Select, Image } from 'controls';

import styles from './styles.module.css';
import useEvents from './useEvents';
import useFilter from './useFilter';
import { EventType } from 'types/Event';

const DATE_FORMAT = 'MMM DD,YYYY hh:mm'
const columns: GridColDef<EventType>[] = [
  { field: 'uniqueCode', headerName: 'Patch/Lot', flex: 1 },
  { field: 'eventTime', headerName: 'Event Time', renderCell: ({ row }) => dayjs(row.eventTime).format(DATE_FORMAT), flex: 1 },
  { field: 'location', renderCell: ({ row }) => row.recordedBy?.address, headerName: 'Location', flex: 1 },
  { field: 'type', headerName: 'Type', renderCell: ({ row }) => row.metadata?.length ? row.metadata[0].collection : null, flex: 1 },
  {
    display: 'flex',
    field: 'product', headerName: 'Product', renderCell: ({ row }) => (
      <div className={styles.product}>
        <Image
          internalAsset={!row.mainProduct?.primaryImage?.filenameDisk}
          src={row.mainProduct?.primaryImage?.filenameDisk || '/product-empty.svg'}
          alt=''
          width={32}
          height={32}
        />
        <div>
          <div className={styles.productTitle}>{row.mainProduct?.name}</div>
          <div className={styles.productDes}>{row.mainProduct?.description}</div>
        </div>
      </div>
    ),
    sortable: false,
    flex: 2
  },
  { display: 'flex', field: 'status', renderCell: ({ row }) => <Status status={row.status} />, headerName: 'Status', flex: 1, sortable: false, },
  {
    display: 'flex',
    field: 'supplier', headerName: 'Suppliers', renderCell: ({ row }) => (
      <div className={styles.supplier}>
        <Image
          internalAsset={!row.recordedBy?.logo?.filenameDisk}
          src={row.recordedBy?.logo?.filenameDisk || './supplier-empty.svg'}
          alt=''
          width={32}
          height={32}
        />
        <div><div className={styles.supplierTitle}>{row.recordedBy?.name}</div><div className={styles.supplierDes}>{row.recordedBy?.description}</div></div>
      </div>),
    sortable: false,
    flex: 2
  }
];

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
  const router = useRouter()
  const { data: rawData, loading } = useEvents()
  const { filter, handleChange } = useFilter()

  const data = useMemo(() => {
    const filteredData: EventType[] = []
    rawData.forEach((item) => {
      let valid = true

      // check type
      if (filter.type) {
        if (!item.metadata?.length || filter.type !== item?.metadata[0].collection) {
          valid = false
        }
      }

      // check start date
      if (filter.startDate) {
        if (!item.eventTime || dayjs(item.eventTime).isBefore(filter.startDate)) {
          valid = false
        }
      }

      // check end date
      if (filter.endDate) {
        if (!item.eventTime || dayjs(item.eventTime).isAfter(filter.endDate)) {
          valid = false
        }
      }

      // check search (fake search by random boolean value)
      if (filter.search) {
        if (Math.random() < 0.5) {
          valid = false
        }
      }

      if (valid) {
        filteredData.push(item)
      }
    })

    return filteredData
  }, [filter, rawData])

  const types = useMemo(() => {
    const res: string[] = []

    rawData.forEach(item => {
      if (item.metadata?.length) {
        const colection = item.metadata[0]?.collection
        if (colection && !res.includes(colection)) {
          res.push(colection)
        }
      }
    })

    return res
  }, [rawData])

  const handleRowClick = ({ row }: GridRowParams<EventType>) => {
    router.push('/flow/2/1')
  };

  return (
    <Box className={styles.container}>
      <p className={styles.title}>Event log tracking</p>

      <div className={styles.filterContainer}>
        <Select
          name="type"
          label="Select type"
          size="small"
          allowNone
          onChange={(event) => { handleChange('type', event.target.value as string) }}
          value={filter.type}
        >
          {types.map(type =>
            <MenuItem key={type} value={type}>{type}</MenuItem>)
          }
        </Select>

        <DatePicker
          name="startDate"
          sx={{ width: '100%' }}
          slotProps={{ textField: { size: 'small' } }}
          label="Start date"
          value={filter.startDate}
          onChange={(value) => { handleChange('startDate', value) }}
        />

        <DatePicker
          name="endDate"
          sx={{ width: '100%' }}
          slotProps={{ textField: { size: 'small' } }}
          label="End date"
          value={filter.endDate}
          onChange={(value) => { handleChange('endDate', value) }}
        />

        <DebounceInput
          label="Input search text"
          size="small"
          value={filter.search}
          onChange={(event) => { handleChange('search', event.target.value) }}
        />
      </div>

      <Table
        classes={{ row: styles.row }}
        onRowClick={handleRowClick}
        loading={loading}
        rows={data}
        columns={columns}
      />
    </Box>
  );
}

export default Index
