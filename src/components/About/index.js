import React from 'react'
import StyledAvatar from '../StylingComponents/StyledAvatar'

const About = () => {
    return (
        <div className='row'>
            <div className='section'>
                <h3>About Me <span><img src='/favicon.ico' alt='aboutIcon'></img></span></h3>
            </div>
            <div className='divider'></div>
            <div className='section row'>
                <StyledAvatar className='circle responsive-img col s4' src='/assets/images/Headshot.jpeg' alt='avatar'></StyledAvatar>
                <h4 className='col s8'>Who am I? What do I do?</h4>
                <p>My name is Nick Giuliani and I'm a Full-Stack web developer. Specializing in Javascript, the React framework, Node.js, and other in demand technologies, I can bring my skill set to your project or business.  Creating software is an engaging and passionate process for me as it incorporates creativity, problem solving, and teamwork to build all kinds of things that improves everyone's life, one way or another.  Thanks for stopping by and be sure to check out my projects!</p>
            </div>
        </div>
    )
}

export default About
