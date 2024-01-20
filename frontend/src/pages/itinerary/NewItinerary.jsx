import { useState } from "react";
// import StyledButton from "./StyledButton";
import {
    Button,
    Box,
    TextField,
    MenuItem,
    Grid,
    Input,
    CircularProgress,
    IconButton,
    Typography,
    FormControl,
    Select,
    InputLabel,
  } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591  

const NewItinerary = () => {

  const [name, setname] = useState('');
  const [cost, setcost] = useState('');
  const [notes, setnotes] = useState('');

  const handleSubmit = () => {
    return; }
  return (
    <Box margin={4}>
    <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
        component="a"
        href="#"
        label="Dashboard"
        />
        <StyledBreadcrumb component="a" href="#" label="New Itinerary" />
    </Breadcrumbs>
      <section>
        <h1>New Itinerary</h1>
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
          <Button>Create Itinerary</Button>
        </FormControl>
      </section>
    </Box>
  )
}
export default NewItinerary