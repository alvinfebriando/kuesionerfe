import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const Header = () => {
  return (
    <Box mb={2} sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Container maxWidth='md'>
            <Grid container>
              <Grid item xs>
                <Link href='/' underline='none' color='inherit'>
                  Kuesioner
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link href='/generator' underline='none' color='inherit'>
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
