import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/templates/Logo/Logo';
import NavMenu from '../components/templates/Nav/NavMenu/NavMenu';
import Routes from './Routes';
import Footer from '../components/templates/Footer/Footer';

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <NavMenu />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>