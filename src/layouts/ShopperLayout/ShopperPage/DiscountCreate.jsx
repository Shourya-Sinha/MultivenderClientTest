import React from 'react';
import { Box, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'switches',
        label: 'Published',
        minWidth: 170,
        align: 'right',
        // icon:<Switch />
      },
  ];
  
  function createData(name, code, population, size,switches) {
    const density = population / size;
    return { name, code, population, size, density ,switches};
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263,<Switch />),
    createData('China', 'CN', 1403500365, 9596961,<Switch />),
    createData('Italy', 'IT', 60483973, 301340,<Switch />),
    createData('United States', 'US', 327167434, 9833520,<Switch />),
    createData('Canada', 'CA', 37602103, 9984670,<Switch />),
    createData('Australia', 'AU', 25475400, 7692024,<Switch />),
    createData('Germany', 'DE', 83019200, 357578,<Switch />),
    createData('Ireland', 'IE', 4857000, 70273,<Switch />),
    createData('Mexico', 'MX', 126577691, 1972550,<Switch />),
    createData('Japan', 'JP', 126317000, 377973,<Switch />),
    createData('France', 'FR', 67022000, 640679,<Switch />),
    createData('United Kingdom', 'GB', 67545757, 242495,<Switch />),
    createData('Russia', 'RU', 146793744, 17098246,<Switch />),
    createData('Nigeria', 'NG', 200962417, 923768,<Switch />),
    createData('Brazil', 'BR', 210147125, 8515767,<Switch />),
  ];

const DiscountCreate = () => {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Box sx={{width:'100%'}}>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination 
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
    </>
  )
}

export default DiscountCreate