import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import Logo from '../components/templates/Logo/Logo';
import NavMenu from '../components/templates/Nav/NavMenu/NavMenu';
import Home from '../components/home/Home';
import Footer from '../components/templates/Footer/Footer';

export default props =>
    <div className='app'>
        <Logo />
        <NavMenu />
        <Home />
        <Footer />
    </div>