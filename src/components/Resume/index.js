import React from 'react'

const Resume = () => {
    return (
        <div className='row'>
            <h3 className='header'>Resume <span><img src='/favicon.ico' alt='aboutIcon'></img></span></h3>
            <div className='row'>
                <h5 className='col s12'>Google Docs link to view and download my resume: <a href='https://docs.google.com/document/d/1VntSbXwSb2nkEYapGG4sixWBBTlEIUYb_SMbXOSnd_w/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></h5>
            </div>
            <div className='divider'></div>
            <div className='row'>
                <h4 className='col s12'>Technologies</h4>
            </div>
            <div className='row'>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Front-End </span>
                        <img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React Badge"/>
                        <img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5 Badge"/>
                        <img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3 Badge"/>
                        <img src="https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&logoColor=white&style=for-the-badge" alt="JQ Badge"/>
                        <img src="https://img.shields.io/badge/-Handlebars.js-000000?logo=handlebars.js&logoColor=white&style=for-the-badge" alt="Handlebars Badge"/>
                        <img src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Handlebars Badge"/>
                    </div>
                </div>    
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Back-End </span>
                        <img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt="Node Badge"/>
                        <img src="https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express Badge"/>
                        <img src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB Badge"/>
                        <img src="https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" alt="MongoDB Badge"/>
                    </div>
                </div>    
            </div>
            </div>
        </div>
    )
}
export default Resume
