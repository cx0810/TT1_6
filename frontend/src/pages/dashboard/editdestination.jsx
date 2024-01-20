import { useState } from "react";
import StyledButton from "./StyledButton";
import {FormControl} from "@mui/material";

const Destination = () => {

  const [name, setname] = useState('');
  const [cost, setcost] = useState('');
  const [notes, setnotes] = useState('');

  const handleSubmit = () => {
    return; }
  return (
    <>
      <section>
        <h1>Edit Destination</h1>
        <FormControl onSubmit={handleSubmit}>
          <label htmlFor="name">Destination Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            required />
          <label htmlFor="cost">Cost</label>
          <input
            type="int"
            id="cost"
            onChange={(e) => setcost(e.target.value)}
            value={cost}
            required />
          <label htmlFor="lastName">Notes</label>
          <input
            type="text"
            id="notes"
            autoComplete="off"
            onChange={(e) => setnotes(e.target.value)}
            value={notes}
            required />
          <StyledButton>Edit Destination</StyledButton>
        </FormControl>
      </section>
    </>
  )
}
export default Destination