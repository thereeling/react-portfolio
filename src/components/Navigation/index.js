import React from 'react';
import StyledH1 from '../StylingComponents/StyledH1';
import StyledNav from '../StylingComponents/StyledNav';
import StyledNavLink from '../StylingComponents/StyledNavLink';

const Nav = (props) => {

    
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <StyledNav className='nav-extended'>
            <div className='nav-wrapper'>
                <StyledH1 className='brand-logo'>Hello! I'm Nick Giuliani</StyledH1>
                <ul className='right hide-on-med-and-down'>
                    {tabs.map(tab => (
                        <li 
                        className={props.currentPage === tab ? 'active' : null } 
                        style={props.currentPage === tab ? {backgroundColor: 'var(--red)'} : null}
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
            <div className='nav-content'>
                <span className='nav-title'>Web Developer</span>
            </div>

    </StyledNav>
    )
}

export default Nav;