import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {  Container, Link, Typography } from '@mui/material';

import Buttons from './components/Buttons';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {


  return (


    <Container component="main" maxWidth="xs">

    <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" />
        </Routes>
        <Buttons />
      </BrowserRouter>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default App;
