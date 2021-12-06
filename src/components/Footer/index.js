import React from 'react'

const Footer = () => {

    return (
        <footer style={{backgroundColor: 'var(--dark-gray)'}}className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Nick Giuliani
            </div>
          </div>
        </footer>
    )
}

export default Footer
