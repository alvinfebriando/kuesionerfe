import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
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
