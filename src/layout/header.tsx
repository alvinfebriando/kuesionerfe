import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const Header = () => {
  return (
    <Box mb={2} sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Container maxWidth='md'>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Questionnaire
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
