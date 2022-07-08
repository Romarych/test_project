import React from 'react';
import './App.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import Container from '@material-ui/core/Container';
import { Grid, Hidden } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {UsersPage} from './components/UsersPage/UsersPage';
import OpenWindow from './components/UsersPage/OpenWindow/OpenWindow';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Container maxWidth="lg" >
          <Grid container spacing={2} >
          <Hidden only={['xs', 'sm']}>
            <Grid item xs={12} md={12} >
              <Header />
              <ToastContainer />
            </Grid>
          </Hidden>
            <Hidden only={['xs', 'sm']}>
              <Grid item xs={2} md={2}>
                <Navbar />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              
              <Routes>
                <Route path='/window' element={<OpenWindow/>}></Route>
                <Route path='/' element={<UsersPage />}></Route>
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </HashRouter>
  )
}

export default App;
