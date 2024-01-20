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

//pages
import DashboardItineraryList from './DashboardItineraryList';

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

const dashboard = () => {

  const [itineraryList, setItineraryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
            /*
      GOAL:
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
        const itineraryList = [
          {
            "id": 1,
            "Title": "Dinner",
            "Budget": 200,
            "Country": "Singapore",
            "Destinations": 
            [
              "Singapore",
            ]
          },
          {
            "id": 2,
            "Title": "Dinner 2",
            "Budget": 200,
            "Country": "Singapore 2",
            "List of Destinations included": 
            [
              "Singapore",
            ]
          }
      ]
  
      setItineraryList(itineraryList);
      try {
        // const response = await axios.get('http://localhost:5000/insurance_claims/58001001')
        // const data = await response.data;
        // console.log('Claim data:', data);

        // // Organize claims by status
        // const pendingClaims = data.filter((claim) => claim.Status === 'Pending');
        // const approvedClaims = data.filter((claim) => claim.Status === 'Approved');
        // const rejectedClaims = data.filter((claim) => claim.Status === 'Rejected');

        // console.log('Pending claims:', pendingClaims);
        // console.log('Approved claims:', approvedClaims);
        // console.log('Rejected claims:', rejectedClaims);

        // setPendingClaims(pendingClaims);
        // setApprovedClaims(approvedClaims);
        // setRejectedClaims(rejectedClaims);
      } catch (error) {
        console.error('Error fetching claim data:', error);
      }
    };

    fetchData();
  },[])

  return (
    <Box margin={4}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          // icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="Dashboard" />
      </Breadcrumbs>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <h1>Itinerary 🗺️</h1>
          <Button 
              variant="contained" 
              color="primary" 
              // startIcon={<AddIcon />} 
              onClick={() => {navigate('/new-record');}}
          >
              Create
          </Button>
      </Box>
      {/* <ClaimList
        pendingClaims={pendingClaims}
        approvedClaims={approvedClaims}
        rejectedClaims={rejectedClaims}
      /> */}
      <DashboardItineraryList 
        itineraryList={itineraryList}
        />
    </Box>
  )
}

export default dashboard