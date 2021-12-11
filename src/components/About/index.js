import React from 'react'
import StyledAvatar from '../StylingComponents/StyledAvatar'
import gray from '../../assets/images/gray.ico'
import Headshot from '../../assets/images/Headshot.jpeg'

const About = () => {
    return (
        <div className='row'>
            <div className='col s12'>
                <h3 className='header'>About Me <span><img src={gray} alt='Gray Monster'></img></span></h3>
            <div style={{backgroundColor: 'var(--dark-gray)'}} className='card-panel'>
                <div className='card-image center-align'>
                    <StyledAvatar className='responsive-img' src={Headshot} alt='avatar'></StyledAvatar>
                </div>
                <div className='card-stacked'>
                    <div className='card-content'>
                        <h4 className='center-align'style={{borderBottom: '2px solid var(--red)'}}>Who am I? What do I do?</h4>
                        <p>My name is Nick Giuliani and I'm a Full-Stack web developer.<br/> Specializing in Javascript, the React framework, Node.js, and other in demand technologies, I can bring my skill set to your project or business. <br/> Creating software is an engaging and passionate process for me as it incorporates creativity, problem solving, and teamwork to build all kinds of things that improves everyone's life, one way or another.  Thanks for stopping by and be sure to check out my projects!</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About
