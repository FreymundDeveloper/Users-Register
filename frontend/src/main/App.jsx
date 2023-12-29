import './App.css';
import React from 'react';

import Logo from '../components/templates/Logo/Logo';
import Nav from '../components/templates/Nav/Nav';
import Main from '../components/templates/Main/Main';
import Footer from '../components/templates/Footer/Footer';

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>