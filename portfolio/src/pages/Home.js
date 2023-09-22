import React from 'react';
import "../styles/home.css";

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Olayanju Oluwadamilare Samuel</h2>
            <div className="prompt">
            <p> A software developer with a passion for learning and creating.</p>
            </div>
        </div>
        
        <div className='skills'>
            <h1>Skills</h1>
            <ul className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>ReactJS, HTML, CSS, JavaScript, React Native</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>NodeJS, Php, MySQL, .NET, MongoDB</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript, Python, C, C++</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home; 