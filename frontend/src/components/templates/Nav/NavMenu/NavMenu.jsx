import './NavMenu.css';
import React from 'react';

import NavHome from '../NavHome/NavHome';

export default props =>
    <aside className='menu-area'>
        <nav className='menu'>
            <NavHome icon={"home"} title={"Start"} /> 
            <NavHome icon={"users"} title={"Users"} />
        </nav>
    </aside>