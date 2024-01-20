import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
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
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import DashboardItinerary from './DashboardItinerary';

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
});

/*
Display user’s existing itineraries [2].
▪
Itinerary Title
▪
Budget
▪
Country
▪
List of Destinations included
*/

const DashboardItineraryList = ({ itineraryList }) => {
    return (
        <div>
            {/* <h2>Itinerary 🗺️</h2> */}
            {/* Todo: Render the itinerary list */}
            <Grid container spacing={2}>
                
            </Grid>
            <DashboardItinerary/>
        </div>
    )
}

export default DashboardItineraryList