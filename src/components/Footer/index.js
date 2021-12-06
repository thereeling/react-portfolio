import React from 'react';
import StyledFooterIcon from '../StylingComponents/StyledFooterIcon';

const Footer = () => {

    return (
        <footer style={{backgroundColor: 'var(--dark-gray)'}}className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12 center">
              <a href='https://github.com/thereeling' target='_blank' rel="noreferrer"><StyledFooterIcon className="waves-effect waves-red small fab fa-github"></StyledFooterIcon></a>
              <a href='https://www.linkedin.com/in/ngiuliani94/' target='_blank' rel="noreferrer"><StyledFooterIcon className="waves-effect waves-red small fab fa-linkedin"></StyledFooterIcon></a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
            © 2014 Nick Giuliani
            </div>
          </div>
        </footer>
    )
}

export default Footer
