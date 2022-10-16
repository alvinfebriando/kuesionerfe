import { AppBar, Box, Grid, Link, Toolbar } from '@mui/material/';
import { Container } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box mb={2} sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Container maxWidth='md'>
            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to='/'
                  href='/'
                  underline='none'
                  color='inherit'
                >
                  Kuesioner
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  component={RouterLink}
                  to='/generator'
                  underline='none'
                  color='inherit'
                >
                  Generator
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
