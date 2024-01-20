import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

const itinerary = () => {
  const rows = [
    {
      destination: "test",
      cost: 1,
      notes: "test",
    },
    {
      destination: "test",
      cost: 1,
      notes: "test",
    },
    {
      destination: "test",
      cost: 1,
      notes: "test",
    },
  ];

  return (
    <div>
      <Navbar />
      <h1>Itinerary Page</h1>
      <Grid
        sx={{ mb: 1 }}
        container
        direction="row"
        justifyContent="space-between"
        justify="flex-end"
      >
        <Button variant="contained">Create Destination</Button>
        <TextField
          id="outlined-basic"
          label="Seach destination"
          variant="outlined"
          align="left"
        />
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Destinations</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Notes</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.destination}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
                <TableCell align="right">
                  <div>
                    <IconButton color="warning" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p align="right">Total Budget: </p>
      <Footer />
    </div>
  );
};

export default itinerary;
