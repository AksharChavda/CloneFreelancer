import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/Group 1.png'
import Nav from './Nav'
import styled from 'styled-components'
const Navbar = () => {
  const [showBrowse,setShowBrowse]=useState(false)
  
  return (
    <Header>
        <NavLink to={"/"}>
            <img src={image} alt="logo" style={{width:"120px"}}/>
          

        </NavLink>
        <Nav/>
    </Header>

  )
}
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4.8rem;
    height: 8rem;
    background-color: ${({theme}) => theme.colors.bg};
    `
export default Navbar
// // import '../styles/nav.css'
// 
// import { NavLink } from 'react-router-dom';
// import Nav from './Nav';



// export default function Navbar(){
//     // const navRef=useRef<HTMLElement | null>(null);
//     // const showNavbar=()=>{
//     //     if (navRef.current) {
//     //         navRef.current.classList.toggle('responsive_nav');
//     //     }
//     // }
//     const logoClicked=()=>{
//         window.location.href='/Dashboard';
//     }
   
//     // const { user, loginWithRedirect, isAuthenticated, logout }= useAuth0()
//   return (
//     <header>
//         <NavLink to={"/"}>       
//          <img src={image} alt="logo" style={{width:"120px"}} onClick={logoClicked}/>

//         {/* <img src={Page} alt="browse" style={{width:"120px"}}/>
//         <img src={profile} alt="profile" style={{height:"40px", position:"relative"}}/>
        
//           {isAuthenticated && <p>{user?.name}</p>}   
        
//         {
//             isAuthenticated ? 
//             <button  onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> : 
//             <button onClick={()=>loginWithRedirect()}>Login</button>
//         }
            
        
//         <button className="nav-btn nav-close-btn"title="Close" onClick={showNavbar}>
        
//             <FaTimes />
//         </button> */}
//         </NavLink> 
//         <Nav/>
//         {/* <button className='nav-btn' title="Menu" onClick={showNavbar}>
//             <FaBars />
//         </button> */}
//     </header>
//   )
// }
