import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainNavbarItems = [
    {
        id: 1,
        icon: <FlightTakeoffIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 2,
        icon: <LogoutIcon />,
        label: 'Logout',
        route: 'logout',
    },
]