import { Paper } from '@mui/material'
import type { DataGridProps, GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'


const Table = (props: DataGridProps) => {
  return (
    <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        {...props}
      />
    </Paper>
  )
}

export default Table
export type { GridColDef }