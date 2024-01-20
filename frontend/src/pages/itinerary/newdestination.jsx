import { useState } from "react";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";

import "../../assets/Form.css";
import { useEffect } from "react";
import axios from "axios";

const Destination = () => {
  const [country, setcountry] = useState("");
  const [name, setname] = useState("");
  const [cost, setcost] = useState("");
  const [notes, setnotes] = useState("");

  const handleSubmit = () => {
    const data = {
      country,
      name,
      cost,
      notes,
    };
    axios
      .post(`http://127.0.0.1:5000/create_destination`, data)
      .then(() => {
        swalSuccess("Destination added successfully").then(() => {
          href = "/itinerary/${id}";
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="formSectionCSS">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>New Destination</h1>
          <FormControl
            onSubmit={handleSubmit}
            style={{ margin: "20px auto", textAlign: "center" }}
          >
            <label htmlFor="country">Country ID:</label>
            <input
              type="number"
              id="country"
              onChange={(e) => setcountry(e.target.value)}
              value={country}
              required
              style={{
                width: "100%",
                height: "40px",
                margin: "5px auto",
                padding: "3px 7px",
                fontSize: "17px",
                textAlign: "center",
              }}
            />
            <label htmlFor="name">Destination Name:</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
              style={{
                width: "100%",
                height: "40px",
                margin: "5px auto",
                padding: "3px 7px",
                fontSize: "17px",
                textAlign: "center",
              }}
            />
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              id="cost"
              onChange={(e) => setcost(e.target.value)}
              value={cost}
              required
              style={{
                width: "100%",
                height: "40px",
                margin: "5px auto",
                padding: "3px 7px",
                fontSize: "17px",
                textAlign: "center",
              }}
            />
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              id="notes"
              autoComplete="off"
              onChange={(e) => setnotes(e.target.value)}
              value={notes}
              required
              style={{
                width: "100%",
                height: "40px",
                margin: "5px auto",
                padding: "3px 7px",
                fontSize: "17px",
                textAlign: "center",
              }}
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              className="btn btn-block"
            >
              New Destination
            </Button>
          </FormControl>
        </Grid>
      </div>
    </>
  );
};

export default Destination;
