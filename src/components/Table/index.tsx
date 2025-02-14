'use client';
import { useEffect, useState } from 'react';

import { Paper, Pagination, PaginationItem } from '@mui/material'
import type { DataGridProps, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { DataGrid, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'

import styles from './styles.module.css'

const PAGE_SIZE = 10;

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}

const initPaginationModel = {
  pageSize: PAGE_SIZE,
  page: 0,
}

const Table = ({ rows, classes, ...props }: DataGridProps) => {
  const [paginationModel, setPaginationModel] = useState(initPaginationModel);

  useEffect(() => {
    setPaginationModel(initPaginationModel)
  }, [rows])

  return (
    <Paper className={styles.container}>
      <DataGrid
        rows={rows}
        classes={{ main: styles.main, columnHeaderTitle: styles.columnHeaderTitle, cell: styles.cell, ...classes }}
        rowHeight={70}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
        {...props}
      />
    </Paper>
  )
}

export default Table
export type { GridColDef, GridRowParams }