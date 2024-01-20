import { useState } from "react";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";

import "../../assets/Form.css";

const EditItinerary = () => {
  const [title, settitle] = useState("");
  const [budget, setbudget] = useState("");
  const [country, setcountry] = useState("");

  const handleSubmit = () => {
    return;
  };

  return (
    <>
      <div classname="formSectionCSS">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>New Itinerary</h1>
          <FormControl
            onSubmit={handleSubmit}
            style={{ margin: "20px auto", textAlign: "center" }}
          >
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              onChange={(e) => settitle(e.target.value)}
              value={title}
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
            <label htmlFor="budget">Budget</label>
            <input
              type="int"
              id="budget"
              onChange={(e) => setbudget(e.target.value)}
              value={budget}
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
            <label htmlFor="budget">Country</label>
            <input
              type="text"
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
            <Button type="submit" variant="contained" className="btn btn-block">
              Edit Itinerary
            </Button>
          </FormControl>
        </Grid>
      </div>
    </>
  );
};
export default EditItinerary;
