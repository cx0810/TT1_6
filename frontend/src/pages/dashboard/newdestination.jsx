import FormControl from '@mui/material/FormControl';
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
  
  const editRecord = () => {
    return (
      <Box margin={4}>
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Dashboard" />
            <StyledBreadcrumb component="a" href="#" label="New Destination" />
          </Breadcrumbs>
      </Box>
    )
  }
  
  export default editDestination