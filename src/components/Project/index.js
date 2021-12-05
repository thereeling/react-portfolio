import React from "react";

const Project = (props) => {
    return (
        <div className='col s12 m4 l4'>
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator responsive-img" alt={props.name} src={props.image}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
                <p>
                    <a href={props.github} target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href={props.deploy} target='_blank' rel="noreferrer"><i className="fas fa-rocket"></i></a>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
        </div>
    )
}

export default Project

