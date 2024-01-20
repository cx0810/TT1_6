import { useState } from "react";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";

import '../../assets/Form.css';

const Destination = () => {

  const [name, setname] = useState('');
  const [cost, setcost] = useState('');
  const [notes, setnotes] = useState('');

  const handleSubmit = () => {
    return;
  };

  return (
    <>
      <div classname="formSectionCSS">
        <h1>New Destination</h1>
        <FormControl onSubmit={handleSubmit} style={{ margin: "20px auto", textAlign: "center" }}>
          <label htmlFor="name">Destination Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            required
            style={{ width: "100%", height: "40px", margin: "5px auto", padding: "3px 7px", fontSize: "17px", textAlign: "center" }}
          />
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            onChange={(e) => setcost(e.target.value)}
            value={cost}
            required
            style={{ width: "100%", height: "40px", margin: "5px auto", padding: "3px 7px", fontSize: "17px", textAlign: "center" }}
          />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            id="notes"
            autoComplete="off"
            onChange={(e) => setnotes(e.target.value)}
            value={notes}
            required
            style={{ width: "100%", height: "40px", margin: "5px auto", padding: "3px 7px", fontSize: "17px", textAlign: "center" }}
          />
          <Button type="submit" variant="contained" className="btn btn-block">
            New Destination
          </Button>
        </FormControl>
      </div>
    </>
  );
};

export default Destination;
