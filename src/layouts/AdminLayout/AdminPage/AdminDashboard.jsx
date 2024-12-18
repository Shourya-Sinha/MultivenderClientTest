import {
  Box,
  Grid,
  IconButton,
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
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CurrencyInr,
  Shield,
  Storefront,
  User,
  Users,
} from "phosphor-react";
import React, { useState } from "react";
import { ProductOutlined, TransactionOutlined } from "@ant-design/icons";

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

const Dashboard = () => {
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
      <Box sx={{ width: "100%", height: "100%" }}>
        <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
          Dashboard Overview
        </Typography>

        <Grid container spacing={3}>
          {/* Total Shop User */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#E7ECFF", // Stylish color for box 1
                color: "#001529",
                paddingX: 3,
                paddingY: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#001529",
                      borderRadius: 0.5,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Storefront style={{ color: "#fff" }} />
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#001529",
                      }}
                    >
                      Total Shop User In My Mall
                    </Typography>
                    <Typography variant="body2">Total Shop</Typography>
                  </Stack>
                </Stack>
                <IconButton>
                  <ProductOutlined style={{ fontSize: 18 }} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography variant="h5">12</Typography>
                  <Typography variant="caption" sx={{ color: "#43a047" }}>
                    +6.9 %
                  </Typography>
                </Stack>

                <Stack>
                  <svg width="100" height="50" viewBox="0 0 80 20">
                    {/* Line path */}
                    <polyline
                      points="0,15 20,10 40,12 60,8 80,14"
                      fill="none"
                      stroke="#43a047"
                      strokeWidth="2"
                    />
                    {/* Points on the line */}
                    <circle cx="0" cy="15" r="2" fill="#43a047" />
                    <circle cx="20" cy="10" r="2" fill="#43a047" />
                    <circle cx="40" cy="12" r="2" fill="#43a047" />
                    <circle cx="60" cy="8" r="2" fill="#43a047" />
                    <circle cx="80" cy="14" r="2" fill="#43a047" />
                  </svg>
                </Stack>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                {/* Weekly user statics */}
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUp style={{ color: "#43a047" }} />
                  <Typography variant="body2">89%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Weekly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowDown style={{ color: "#c62828" }} />
                  <Typography variant="body2">13%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Monthly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUpRight style={{ color: "#43a047" }} />
                  <Typography variant="body2">03%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Overall
                  </Typography>
                </Stack>
              </Stack>
              {/* Placeholder data */}
            </Box>
          </Grid>

          {/*Over all retail customer */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#ffcd56", // Stylish color for box 4
                color: "#fff",
                paddingX: 3,
                paddingY: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#001529",
                      borderRadius: 0.5,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <User sx={{ color: "#fff" }} />
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#001529",
                      }}
                    >
                      Total Retail Customer in Mall
                    </Typography>
                    <Typography variant="body2">All Customer</Typography>
                  </Stack>
                </Stack>
                <IconButton>
                  <TransactionOutlined size={18} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography variant="h5">
                    {/* {annualTrans ? annualTrans.toFixed(2) : "0.00"} */}
                    678.89
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#43a047" }}>
                    +6.9 %
                  </Typography>
                </Stack>

                <Stack>
                  <svg width="100" height="50" viewBox="0 0 80 20">
                    {/* Line path */}
                    <polyline
                      points="0,15 20,10 40,12 60,8 80,14"
                      fill="none"
                      stroke="#43a047"
                      strokeWidth="2"
                    />
                    {/* Points on the line */}
                    <circle cx="0" cy="15" r="2" fill="#43a047" />
                    <circle cx="20" cy="10" r="2" fill="#43a047" />
                    <circle cx="40" cy="12" r="2" fill="#43a047" />
                    <circle cx="60" cy="8" r="2" fill="#43a047" />
                    <circle cx="80" cy="14" r="2" fill="#43a047" />
                  </svg>
                </Stack>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                {/* Weekly user statics */}
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUp style={{ color: "#43a047" }} />
                  <Typography variant="body2">89%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Weekly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowDown style={{ color: "#c62828" }} />
                  <Typography variant="body2">13%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Monthly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUpRight style={{ color: "#43a047" }} />
                  <Typography variant="body2">03%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Overall
                  </Typography>
                </Stack>
              </Stack>
              {/* Placeholder data */}
            </Box>
          </Grid>

          {/* Today's Total Transactions */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#FFEFE2", // Stylish color for box 2
                color: "#001529",
                paddingX: 3,
                paddingY: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#001529",
                      borderRadius: 0.5,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <CurrencyInr style={{ color: "#fff" }} />
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#001529",
                      }}
                    >
                      Total Weekly Transactions
                    </Typography>
                    <Typography variant="body2">Amount flow</Typography>
                  </Stack>
                </Stack>
                <IconButton>
                  <TransactionOutlined style={{ fontSize: 18 }} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography variant="h5">
                    {/* {weeklyTrans ? weeklyTrans.toFixed(2) : "0.00"} */}
                    123.89
                  </Typography>
                  {/* <Typography variant="h5">65783563</Typography> */}
                  <Typography variant="caption" sx={{ color: "#43a047" }}>
                    +6.9 %
                  </Typography>
                </Stack>

                <Stack>
                  <svg width="100" height="50" viewBox="0 0 80 20">
                    {/* Line path */}
                    <polyline
                      points="0,15 20,10 40,12 60,8 80,14"
                      fill="none"
                      stroke="#43a047"
                      strokeWidth="2"
                    />
                    {/* Points on the line */}
                    <circle cx="0" cy="15" r="2" fill="#43a047" />
                    <circle cx="20" cy="10" r="2" fill="#43a047" />
                    <circle cx="40" cy="12" r="2" fill="#43a047" />
                    <circle cx="60" cy="8" r="2" fill="#43a047" />
                    <circle cx="80" cy="14" r="2" fill="#43a047" />
                  </svg>
                </Stack>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                {/* Weekly user statics */}
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUp style={{ color: "#43a047" }} />
                  <Typography variant="body2">89%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Weekly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowDown style={{ color: "#c62828" }} />
                  <Typography variant="body2">13%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Monthly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUpRight style={{ color: "#43a047" }} />
                  <Typography variant="body2">03%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Overall
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* This Month's Total Transactions */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#4bc0c0", // Stylish color for box 3
                color: "#fff",
                paddingX: 3,
                paddingY: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#001529",
                      borderRadius: 0.5,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <CurrencyInr sx={{ color: "#fff" }} />
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#001529",
                      }}
                    >
                      Total Monthly Transaction
                    </Typography>
                    <Typography variant="body2">Money Flow</Typography>
                  </Stack>
                </Stack>
                <IconButton>
                  <TransactionOutlined size={18} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography variant="h5">
                    {/* {monthlyTrans ? monthlyTrans.toFixed(2) : "0.00"} */}
                    123.78
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#43a047" }}>
                    +6.9 %
                  </Typography>
                </Stack>

                <Stack>
                  <svg width="100" height="50" viewBox="0 0 80 20">
                    {/* Line path */}
                    <polyline
                      points="0,15 20,10 40,12 60,8 80,14"
                      fill="none"
                      stroke="#43a047"
                      strokeWidth="2"
                    />
                    {/* Points on the line */}
                    <circle cx="0" cy="15" r="2" fill="#43a047" />
                    <circle cx="20" cy="10" r="2" fill="#43a047" />
                    <circle cx="40" cy="12" r="2" fill="#43a047" />
                    <circle cx="60" cy="8" r="2" fill="#43a047" />
                    <circle cx="80" cy="14" r="2" fill="#43a047" />
                  </svg>
                </Stack>
              </Stack>

              <Stack direction={"row"} justifyContent={"space-between"}>
                {/* Weekly user statics */}
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUp style={{ color: "#43a047" }} />
                  <Typography variant="body2">89%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Weekly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowDown style={{ color: "#c62828" }} />
                  <Typography variant="body2">13%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Monthly
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <ArrowUpRight style={{ color: "#43a047" }} />
                  <Typography variant="body2">03%</Typography>
                  <Typography variant="caption" sx={{ color: "#bdbdbd" }}>
                    Overall
                  </Typography>
                </Stack>
              </Stack>
              {/* Placeholder data */}
            </Box>
          </Grid>
        </Grid>

        {/* Today Order */}
        <Paper sx={{ width: "100%", paddingTop: 3 }}>
          <Typography variant="subtitle2" sx={{ paddingY: 1, paddingLeft: 2 }}>
            Today's Order
          </Typography>
          <TableContainer sx={{ maxHeight: 460 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                {/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow> */}
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
      </Box>
    </>
  );
};

export default Dashboard;
