import React, { useEffect } from 'react';
import StyledLogo from '../StylingComponents/StyledLogo';
import StyledNav from '../StylingComponents/StyledNav';
import StyledNavLink from '../StylingComponents/StyledNavLink';


export const Nav = (props) => {
    

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    const M = window.M;
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});     
    }, []) 

    return (
        <div>
            <div className='navbar-fixed'>
            <StyledNav>
                <div className='nav-wrapper'>
                    <StyledLogo href='#about' className='brand-logo center'>Nick Giuliani</StyledLogo>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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
             </div>
            <ul className="sidenav" id="slide-out">
            {tabs.map(tab => (
                <li 
                className={props.currentPage === tab ? 'active' : null } 
                style={props.currentPage === tab ? {borderBottom: '2px solid var(--red)'} : null}
                key={tab}>
                    <a
                    href={'#' + tab.toLowerCase()}
                    onClick={() =>
                        props.handlePageChange(tab)}
                    >
                    {tab}
                    </a>
                </li>
            ))}
            </ul>                          
    </div>
    )
}

export default Nav;