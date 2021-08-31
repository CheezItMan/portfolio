import React from "react";
import profilePic from '../images/splash.jpg'
import './about.css'

const About = () => {
    return(
        <div className="portfolio__about">
            <div className="about-intro">
                <h2>About</h2>
                <p className="italic">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="flexbox-container">
                <div className="image flex-child">
                    <img src={profilePic} alt={"cat"} width="300px" />
                </div>
                <div className="right flex-child">
                    <h3>Software Engineer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    <div className="about-list">
                        <i className="fas fa-angle-right"></i> 
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div className="facts">
                <h3>Facts</h3>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="portfolio__skills">
                <h3>Skills</h3>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className="skills-level">
                    <p className="skill">RUBY</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "10%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    <p className="skill">RUBY ON RAILS</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="skill">HTML</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="skill">CSS</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="skill">JAVASCRIPT</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="skill">REACT</p>
                    <div className="progress m-2">
                        <div className="progress-bar" role="progressbar" style={{"width": "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 