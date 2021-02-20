import React from 'react'
import {NavLink} from "react-router-dom";
import '../assets/styles/components/_navbar.scss';
import { useLocation } from "react-router-dom";
import {User} from "./User";
import {Bell} from "./Bell";
import {Notes} from "./Notes";


export const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <nav className='navbar'>
            <NavLink activeClassName='navLink_active' className='navLink' to='/section1'>
                <div className='navLink__icon'>
                    <User color={pathname==='/section1' ? '#0083FF' : '' } opacity={pathname==='/section1' ? '1' : '' } />
                </div>
                <div className='navLink__text'>Section 1</div>
            </NavLink>
            <NavLink activeClassName='navLink_active' className='navLink' to='/section2'>
                <div className='navLink__icon'>
                    <Bell color={pathname==='/section2' ? '#0083FF' : '' } opacity={pathname==='/section2' ? '1' : '' } />
                </div>
                <div className='navLink__text'>Section 2</div>
            </NavLink>
            <NavLink activeClassName='navLink_active' className='navLink' to='/section3'>
                <div className='navLink__icon'>
                    <Notes color={pathname==='/section3' ? '#0083FF' : '' } opacity={pathname==='/section3' ? '1' : '' } />
                </div>
                <div className='navLink__text'>Section 3</div>
            </NavLink>
        </nav>
    )
}
