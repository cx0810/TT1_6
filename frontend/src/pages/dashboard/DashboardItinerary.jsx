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

function DashboardItinerary({ itinerary }) {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    // Function to open the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Function to close the dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Function to call when delete is confirmed
    const handleConfirmDelete = () => {

        handleClose();
        // console.log("Delete! ClaimID: ", claim.ClaimID);
        // console.log(claim.InsuranceID);
        axios.delete("http://localhost:5000/insurance_claims/delete/"+claim.InsuranceID+"/"+claim.ClaimID)
    };

    // Function to call when delete icon is clicked
    const handleDelete = () => {
        // console.log("claim: ", claim.Status)
        // console.log("Delete! ClaimID: ", claim.ClaimID)
        handleClickOpen();
    };

    // Function to call when edit icon is clicked
    const handleEdit = () => {
        //onEdit(itinerary.id); // Or handle the edit logic directly here
        // route to edit page
        navigate('/edit-itinerary')
    };

    return (
        <Card sx={{ marginBottom: "20px", position: 'relative' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {itinerary.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span sx={{ marginBottom: "20px" }}>
                        Budget: ${itinerary.Budget} <br />
                    </span>
                    Country: {itinerary.Country} <br />
                    List of destinations:  {itinerary.Destinations}
                </Typography>
            </CardContent>
            <IconButton 
                aria-label="delete" 
                onClick={handleDelete} 
                sx={{ position: 'absolute', top: '10px', right: '10px' }}
            >
                <DeleteIcon />
            </IconButton>
            <IconButton 
                aria-label="edit" 
                onClick={handleEdit} 
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
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} autoFocus>
                        Confirm Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default DashboardItinerary;
