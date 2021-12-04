import React from 'react';
import Nav from '../Navigation/index'

const Header = (props) => {


    return (
        <header>
        <Nav handlePageChange={props.handlePageChange}/>
        </header>
    )


}

export default Header;