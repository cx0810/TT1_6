import React, { useEffect, useState } from "react";
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
import { swalConfirmation, swalSuccess } from "../../utils/sweet-alert.utils";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

const itinerary = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [openDeleteDestinationModal, setOpenDeleteDestinationModal] =
    useState(false);

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

  useEffect(() => {
    // Calculate total cost when rows change
    const calculateTotalCost = () => {
      let sum = 0;
      for (const row of rows) {
        sum += row.cost;
      }
      setTotalCost(sum);
    };

    calculateTotalCost();
  }, [rows]);

  useEffect(() => {
    setFilteredDestinations(rows);
  }, []);

  const handleFilter = (e) => {
    const { value } = e.target;
    const filteredDestinations = rows.filter((row) =>
      row.destination.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDestinations(filteredDestinations);
  };

  const handleDelete = async (id) => {
    setOpenDeleteDestinationModal(true);
    const { isConfirmed } = await swalConfirmation(
      "Are you sure you want to delete this destination?"
    );
    if (!isConfirmed) return;
  };

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
          onChange={handleFilter}
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
            {filteredDestinations.map((row, index) => (
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
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p align="right">Total Budget:${totalCost}</p>
      <Footer />
    </div>
  );
};

export default itinerary;
