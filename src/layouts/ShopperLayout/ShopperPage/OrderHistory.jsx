import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import ProductImage from "../../../assets/coat.png";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const OrderHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack sx={{ paddingY: 2 }}>
          <Typography variant="h6">Order History</Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <TableContainer>
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
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
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle">
                  OrderId: BR8974328943
                </Typography>
                <Typography variant="subtitle">
                  Order Date: 12 JAN,2024
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                {/* Image */}

                <Grid item xs={12} md={2.5}>
                  <Box
                    sx={{
                      padding: 1,
                      backgroundColor: "#F5F5F5",
                      borderRadius: 1,
                    }}
                  >
                    <img
                      src={ProductImage}
                      alt="Product"
                      style={{ height: 175, objectFit: "contain" }}
                    />
                  </Box>
                </Grid>

                {/* Details */}
                <Grid item xs={12} md={9.5}>
                  <Box
                    sx={{
                      padding: 1,
                      backgroundColor: "#F5F5F5",
                      borderRadius: 1,
                    }}
                  >
                    <Stack sx={{ paddingY: 1 }}>
                      <Typography variant="subtitle">
                        Random Stripe Mens Blazer Sports Coat Slim Fit 2 Button
                        Solid Men's Casual Suit Blazer Jackets
                      </Typography>
                      <Typography variant="caption">Price: ₹100</Typography>
                      <Typography variant="caption">Quantity: 2</Typography>
                      <Typography variant="caption"> Discount: ₹4</Typography>
                      <Typography variant="caption">Total: ₹200</Typography>
                      <Typography variant="caption">
                        Order Status:{" "}
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "#e53935",
                            display: "inline",
                          }}
                        >
                          Pending
                        </p>
                      </Typography>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Typography variant="body2">
                          Send Request for cancel to Admin :
                        </Typography>
                        <Button
                          sx={{
                            paddingX: 4,
                            paddingY: 0.1,
                            backgroundColor: "#b71c1c",
                            color: "#fff",
                            borderRadius: 0.5,
                            "&:hover": {
                              backgroundColor: "#ef5350",
                              color: "#fff",
                            },
                          }}
                        >
                          Send Request
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OrderHistory;
