import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
      }}
    >
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='md'>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
