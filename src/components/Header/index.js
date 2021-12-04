import React from 'react';
import Nav from '../Navigation/index'

const Header = (props) => {

    return (
        <header>
            <h1>
                <a data-testid="link" href="/">
                <strong>Hello! <br /> I'm Nick Giuliani</strong>
                </a>
            </h1>
            <h2>Web Developer</h2>
        <Nav handlePageChange={props.handlePageChange}/>
        </header>
    )


}

export default Header;