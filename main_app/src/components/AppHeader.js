import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../logo.png';
import Button from '@mui/material/Button';

const AppHeader = () => {
    return (
      <>
        <AppBar position="sticky" className='app-bar'>
          <Toolbar>
            <img src={logo} alt="logo" className='img-header'/>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Main app</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  export default AppHeader;