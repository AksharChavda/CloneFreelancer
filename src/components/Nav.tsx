import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu, CgCloseR } from 'react-icons/cg'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const Nav = styled.nav`

.navbar-list{
display: flex;
gap: 5rem;


li{
    list-style: none;

.navbar-links{
    &:link, visited{
    display: inline-block;
        text-decoration: none;

        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s linear;
}
    
&:hover, &:active{
    color: ${({ theme }) => theme.colors.helper};
}
}
}
}

.mobile-navbar-btn{
    display: none;
    .close-outline{
        display: none;
    }
}
.mobile-navbar-btn[name='close-outline']{
display: none;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
.mobile-navbar-btn {
display: inline-block;
z-index: 999;
border: ${({ theme }) => theme.colors.white};

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
                .navbar-list{
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: #000;
                    width: 100vw;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    transform: translateX(100%);
                    visibility: hidden;
                    opacity: 0;
                    
                    li{
                    
                    &.navbar-links{
                    &:link, visited{
                    font-size: 4.2rem;
                    }
                    &:hover, &:active{
    color: ${({ theme }) => theme.colors.helper};
}
}
}
}
.active .mobile-nav-icon{
display: none;
position: absolute;
top: 3%;
right: 10%;
font-size: 4.2rem;
color: ${({ theme }) => theme.colors.white};
z-index: 100;
}
.active .close-outline{
display: inline-block;
color: ${({ theme }) => theme.colors.white};
}
.active .navbar-list{
transform: translateX(0);
transition: transform 0.3s ease-in-out;
visibility: visible;
opacity: 1;
z-index: 99;
}
}

`
    return (
        <Nav>
            <div className={openMenu ? "menuIcon active" : "menuIcon"}>
                <ul className="navbar-list">
                    <li><NavLink className="navbar-links" to={"/dashboard"} onClick={() => setOpenMenu(false)}>Dashboard</NavLink></li>
                    <li><NavLink className="navbar-links" to={"/browse"} onClick={() => setOpenMenu(false)}>Browse</NavLink></li>
                    <li><NavLink className="navbar-links" to={"/profile"} onClick={() => setOpenMenu(false)}>Profile</NavLink></li>

                </ul>
                <div className="mobile-navbar-btn">
                    <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={() => setOpenMenu(true)} />
                    <CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={() => setOpenMenu(false)} />
                </div>
            </div>
        </Nav>
    )
}

export default Nav