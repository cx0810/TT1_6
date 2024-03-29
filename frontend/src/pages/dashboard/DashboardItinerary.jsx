import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; 
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DashboardItinerary({ itinerary }) {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    // Function to open the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Function to close the dialog
    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        setOpen(false);
    };

    // Function to call when delete is confirmed
    const handleConfirmDelete = (event) => {
        event.preventDefault();
        event.stopPropagation();

        handleClose();
        // console.log("Delete! ClaimID: ", claim.ClaimID);
        // console.log(claim.InsuranceID);
        console.log("Delete! ItineraryID: ", itinerary.id);
        axios.delete("http://localhost:5000/delete_destination/"+itinerary.id);
        
    };

    // Function to call when delete icon is clicked
    const handleDelete = (event) => {
        // console.log("claim: ", claim.Status)
        // console.log("Delete! ClaimID: ", claim.ClaimID)
        event.preventDefault();
        event.stopPropagation();
        handleClickOpen();
    };

    // Function to call when edit icon is clicked
    const handleEdit = (event) => {
        //onEdit(itinerary.id); // Or handle the edit logic directly here
        // route to edit page
        event.preventDefault();
        event.stopPropagation();
        navigate('/edit-itinerary')
    };

    return (
        <Link to={`/destination/${itinerary.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card sx={{ marginBottom: "20px", position: 'relative' }}>

                <CardContent>
                    <Typography variant="h5" component="div">
                        {itinerary.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        
                        Budget: ${itinerary.budget} <br />
                        
                        {/* Country: {itinerary.Country} <br /> */}
                        {/* List of destinations:  {itinerary.Destinations} */}
                        List of destinations:  {itinerary.country_id}
                    </Typography>
                </CardContent>
                <IconButton 
                    aria-label="delete" 
                    onClick={(event) => handleDelete(event)} 
                    sx={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton 
                    aria-label="edit" 
                    onClick= {(event) => handleEdit(event)} 
                    sx={{ position: 'absolute', top: '10px', right: '50px' }} // Adjust the position as needed
                >
                    <EditIcon />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirm Deletion"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this itinerary?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(event) => handleClose(event)}>Cancel</Button>
                        <Button onClick={(event) => handleConfirmDelete(event)} autoFocus>
                            Confirm Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </Link>
    );
}

export default DashboardItinerary;
