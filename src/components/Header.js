import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
const Header = () => {
    return <MainHeader>
        <NavLink to="/">
            <img className='logo' src="/images/logo.png" alt="logo" />
        </NavLink>
        <Nav />
    </MainHeader>

}


const MainHeader = styled.header` 
 height: 10rem;
 width: 98%;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
 
.logo{
 height: 3rem;
}
@media (max-width:${({ theme }) => theme.media.mobile}) { 
    
} 
`;


export default Header
