import React from 'react';


const Nav = (props) => {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className='nav-extended'>
            <div className='nav-wrapper'>
                <h1 className='brand-logo center'>Hello! I'm Nick Giuliani</h1>
                <ul className='right hide-on-med-and-down'>
                    {tabs.map(tab => (
                        <li key={tab}>
                            <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            >
                            {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='nav-content center'>
                <span className='nav-title'>Web Developer</span>
            </div>

    </nav>
    )
}

export default Nav;