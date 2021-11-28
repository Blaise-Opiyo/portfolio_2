import React,{useEffect} from 'react';
import '../styles/BlogHome.css';
import $ from 'jquery';
import alessia_chinazzo_pic from '../assets/alessia-chinazzo-G1i8gUKnD5I-unsplash.jpg';
import project_1_screen from '../assets/Screenshot (25).png';
import project_2_screen from '../assets/Screenshot (21).png';
import project_3_screen from '../assets/Screenshot (28).png';
import undraw_dev_productivity from '../assets/undraw_dev_productivity_umsq.svg';
import joel_muniz_blaise from '../assets/joel-muniz-blaise-st-sm.png';

const BlogHome = () =>{
    useEffect(() =>{
        
            const about_title = $('.blog-home .main-section .about-section .about-section-title h2')[0];
        console.log(about_title);
   
        
    },[]);
    return(
        <div className="blog-home">
            <div className="main-section">
                <div className="mobile-logo">Blaise Opiyo</div>
                <div className="top-nav">
                    <ul className="large-sc-nav">
                        <li className="large-sc-logo"><a href="#">Blaise Opiyo</a></li>
                        <li className="large-sc-contact"><a href="#">Contact</a></li>
                        <li className="large-sc-about"><a href="#">about</a></li>
                        <li className="large-sc-work"><a href="#">Work</a></li>
                        <li className="large-sc-home"><a href="#">Home</a></li>
                    </ul>
                                                       
                </div>
                               
                <div className="mid-intro-wrapper">
                    <div className="mid-intro">
                        <div className="intro-text">
                            <p>Hello, I'm Blaise. </p>
                            <p>A full stack developer. </p>
                            <p> Always up for working on new ideas,  <br/>
                            learning new skills, technologies tools. Rest is history.</p>
                        </div>
                        <div>
                            <div>
                                
                                <img src={undraw_dev_productivity}/> 
                            </div>
                        </div>
                    </div> 
                </div>  

                <div className="sections-title">
                        <h2>Projects</h2>
                        
                </div>
                
                <div className="projects-section">
                    
                    <div className="project-container Nodejs">
                        <img src={project_1_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container Nodejs">
                        <img src={project_2_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container React">
                        <img src={project_3_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container Nodejs">
                        <img src={project_1_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container Nodejs">
                        <img src={project_2_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container React">
                        <img src={project_3_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Fizbuzz title</h3>
                            <div>
                                <p>title/date</p>
                                <p>view project</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-section">
                    <div className="sections-title about-section-title">
                            <h2>About</h2>                    
                    </div>
                    <div className="about-sec-grid">
                        <div className="photo-grid">
                            <div className="photo-wrapper">

                            </div>
                            <div className="photo">

                            </div>
                        </div>
                        <div className="about-text">
                        I became a web developer and designer because I'm drawn to a dynamic career that combines 
                        my spark for learning and helping others.

                        I specialize in creating beautiful websites that are responsive across all devices. 
                        I am consistently learning new ways to increase my skillset to meet my client's needs. 
                        <br /><br />
                        I specialize in creating beautiful websites that are responsive across all devices. 
                        I am consistently learning new ways to increase my skillset to meet my client's needs.
                            <div className="technologies">
                                <div className="lang">
                                    <div className="tech-title">Languages</div>
                                    <div className=" actual-tech languages">
                                        <i class="devicon-html5-plain-wordmark colored"></i>
                                        <i class="devicon-css3-plain-wordmark colored"></i>
                                        <i class="devicon-javascript-plain colored"></i>
                                        <i class="devicon-python-plain-wordmark colored"></i>
                                        <i class="devicon-php-plain-wordmark colored"></i>
                                        <i class="devicon-java-plain-wordmark colored"></i>
                                        <i class="devicon-csharp-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div className="frameworks">
                                     <div className="tech-title">Frameworks</div>
                                    <div className=" actual-tech frameworks">
                                        <i class="devicon-react-original-wordmark colored"></i>
                                        <i class="devicon-nodejs-plain-wordmark"></i>
                                        <i class="devicon-django-plain-wordmark"></i>
                                        
                                    </div>
                                </div>
                                
                                <div className="tools">
                                <div className="tech-title">Tools</div>
                                    <div className=" actual-tech tools">
                                        <i class="devicon-figma-plain colored"></i>
                                        <i class="devicon-photoshop-plain colored"></i>
                                        <i class="devicon-illustrator-plain colored"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHome;