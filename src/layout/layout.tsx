import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth='md'>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Layout;
