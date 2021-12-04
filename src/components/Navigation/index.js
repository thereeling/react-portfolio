import React, { useEffect } from 'react';
import StyledLogo from '../StylingComponents/StyledLogo';
import StyledNav from '../StylingComponents/StyledNav';
import StyledNavLink from '../StylingComponents/StyledNavLink';

const Nav = (props) => {

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    const M = window.M;
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
        console.log('Hello');
        });
    }) 

    return (
        <div>
        <StyledNav>
            <div className='nav-wrapper'>
                <StyledLogo href='#about' className='brand-logo'>Hello! I'm Nick Giuliani <span>Web Developer</span></StyledLogo>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className='right hide-on-med-and-down'>
                        {tabs.map(tab => (
                        <li 
                        className={props.currentPage === tab ? 'active' : null } 
                        style={props.currentPage === tab ? {borderBottom: '2px solid var(--red)'} : null}
                        key={tab}>
                            <StyledNavLink
                            href={'#' + tab.toLowerCase()}
                            onClick={() =>
                                props.handlePageChange(tab)}
                            >
                            {tab}
                            </StyledNavLink>
                        </li>
                    ))}
                </ul>
            </div>

    </StyledNav>
        <ul className="sidenav" id="mobile-demo">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>                          
    </div>
    )
}

export default Nav;