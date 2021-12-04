import React from 'react';


const Nav = (props) => {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
        <ul>
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
    </nav>
    )
}

export default Nav;