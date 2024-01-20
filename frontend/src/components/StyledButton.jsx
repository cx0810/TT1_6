import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '20px 0 20px 0',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
  '&:disabled': {
    background: 'linear-gradient(45deg, #bdbdbd 30%, #757575 90%)',
    color: 'white',
    boxShadow: 'none',
  },
});

export default StyledButton