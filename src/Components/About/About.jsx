import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profileImg from 'src/assets/profileimg.jpeg';
import profileImg from "../../assets/profileimg.jpeg";



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profileImg} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Sugat Athawale, from the dynamic city of Mumbai, Maharashtra, is currently pursuing a BTech at Rishihood University, specializing in Computer Science and Artificial Intelligence. With a solid foundation in frontend technologies, </p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>DSA</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        {/* <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div> */}
        {/* <hr /> */}
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr /> */}
        {/* <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
