import React, { useState } from 'react';
import projects from '../../projectsList.json';
import Project from '../Project';
import red from '../../assets/images/red.ico'
import GiftBuddy_screen from '../../assets/images/GiftBuddy_screen.png'

const Portfolio = () => {
    const [projectsList, setProjectsList] = useState(projects);
    return (
        <div className='row'>
            <h3 className='header'>Portfolio <span><img src={red} alt='Red Monster'></img></span></h3>
            {projectsList.map(project => (
                <Project
                id={project.id}
                name={project.name}
                image={project.image}
                github={project.github}
                deploy={project.deploy}
                description={project.description}
                key={project.id}
                />
            ))}
           
        </div>
    )
}

export default Portfolio
