import React from 'react'

const Contact = () => {
    return (
        <div className="row">
        <h3 className='header'>Contact <span><img src='/favicon.ico' alt='aboutIcon'></img></span></h3>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="first_name" type="text" className="validate"/>
              <label for="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            <label for="textarea1">Textarea</label>
            </div>
          </div>
          
        </form>
      </div>
    )
}

export default Contact
