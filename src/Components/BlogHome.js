import React,{useEffect, useRef} from 'react';
import '../styles/BlogHome.css';
import $ from 'jquery';
import gsap from 'gsap';
import ContactForm from './ContactForm';
import Beelson_logo from '../assets/Beelson-logo-smaller-artboard-v3.png';
import alessia_chinazzo_pic from '../assets/alessia-chinazzo-G1i8gUKnD5I-unsplash.jpg';
// import project_1_screen from '../assets/Screenshot (25).png';
// import project_2_screen from '../assets/Screenshot (21).png';
// import project_3_screen from '../assets/Screenshot (28).png';
import location_weather_screen from '../assets/Limuru Kiambu cool home.PNG';
import portfolio_2_screen from '../assets/intro landing section.PNG';
import ecommerce_screen from '../assets/create product.PNG';
import undraw_dev_productivity from '../assets/undraw_dev_productivity_umsq.svg';
import joel_muniz_blaise from '../assets/joel-muniz-blaise-st-sm.png';

const BlogHome = () =>{
    const mid_intro = useRef(null);
    const mid_intro_txt = gsap.utils.selector(mid_intro);

    const nav_list = useRef(null)
    const nav_list_items = gsap.utils.selector(nav_list);

    const projects_sec = useRef(null)
    const projects = gsap.utils.selector(projects_sec)

    const illustration_img = useRef(null);
    useEffect(() =>{
        
        // const about_title = $('.blog-home .main-section .about-section .about-section-title h2')[0];
        // console.log(about_title);
   
        console.log(mid_intro);
        gsap.from(mid_intro_txt("p"), {stagger: .2, ease:"Power2.easeOut", duration: 1.5, y: 20, opacity: 0});
        gsap.from(illustration_img.current, {ease:"Power2.easeOut", duration: 1.5, opacity: 0, scale: 0.8});
        gsap.from(nav_list_items("li"), { ease: "Power2.easeOut", duration: 1.5, scale: 0, opacity: 0});
        gsap.from(projects(".project-container"), {stagger: .05, ease: "Power2.easeOut", duration: 1.6, opacity: 0})
    },[]);
    return(
        <div className="blog-home">
            <div className="main-section">
                <div className="mobile-logo"><div className="img-logo-cont"><img src={Beelson_logo} alt={Beelson_logo}/></div></div>
                <div className="top-nav">
                    <ul className="large-sc-nav" ref={nav_list}>
                        {/* <li className="large-sc-logo"><a href="#">Blaise Opiyo</a></li> */}
                        <li className="large-sc-logo"><a href="#"><img src={Beelson_logo} alt={Beelson_logo}/></a></li>
                        <li className="large-sc-contact"><a href="#contact">Contact</a></li>
                        <li className="large-sc-about"><a href="#about">About</a></li>
                        <li className="large-sc-work"><a href="#projects">Projects</a></li>
                        <li className="large-sc-home"><a href="#">Home</a></li>
                    </ul>
                                                       
                </div>
                               
                <div className="mid-intro-wrapper">
                    <div className="mid-intro">
                        <div className="intro-text" ref={mid_intro}>
                            <p style={{fontSize:"34px"}}>Hello, I'm Blaise. </p>
                            <p>A <span style={{color:"rgba(255, 87, 2, 1)"}}>software developer.</span></p>
                            <p> I develop <span style={{color:"rgba(255, 87, 2, 1)"}}>responsive full stack web applications.</span></p>
                        </div>
                        <div>
                            <div>
                                
                                <img ref={illustration_img} src={undraw_dev_productivity}/> 
                            </div>
                        </div>
                    </div> 
                </div>  

                <div className="sections-title" id="projects">
                        <h2  >Projects</h2>
                        
                </div>
                
                <div ref={projects_sec} className="projects-section">
                    
                    <div className="project-container Nodejs">
                        <img src={location_weather_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Weather App</h3>
                            <div>
                                <p>React.js | October 2021</p>
                                <p><a href="https://locate-weather.netlify.app/" target="_blank" rel="noreferrer" >view project</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container Nodejs">
                        <img src={portfolio_2_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Portfolio Site</h3>
                            <div>
                                <p>React.js | September 2022</p>
                                <p><a href="">view project</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container React">
                        <img src={ecommerce_screen} alt="project-thumb"/>
                        <div className="project-details">
                            <h3>Online shop</h3>
                            <div>
                                <p>Node.js mysql | July 2020</p>
                                <p><a href="https://m-eshop.herokuapp.com/" target="_blank" rel="noreferrer">view project</a></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="project-container Nodejs">
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
                    </div> */}
                </div>
                
                <div className="about-section" id="about">
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
                        I am a self motivated, high-energy and hardworking developer and I put all my dedication 
                        and effort to my work.
                        I became a software developer to build cool products using technology and have a satisying, 
                        dynamic career that enables me to learn and grow. 
                        I have an enthusiastic attitude towards software development which leads me to consistently want to
                        learn more, dive deep into tools and technologies and to increase my skillset. 
                        <br /><br />
                        I specialize in developing quality full stack web applications that are responsive across 
                        all devices.<br />
                        I am well versed in the following tools and technologies.
                            <div className="technologies">
                                <div className="lang">
                                    <div className="tech-title">Languages</div>
                                    <div className=" actual-tech languages">
                                        <i className="devicon-html5-plain-wordmark colored"></i>
                                        <i className="devicon-css3-plain-wordmark colored"></i>
                                        <i className="devicon-javascript-plain colored"></i>
                                        <i className="devicon-python-plain-wordmark colored"></i>
                                        <i className="devicon-php-plain-wordmark colored"></i>
                                        <i className="devicon-java-plain-wordmark colored"></i>
                                        <i className="devicon-csharp-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div className="frameworks">
                                     <div className="tech-title">Frameworks</div>
                                    <div className=" actual-tech frameworks">
                                        <i className="devicon-react-original-wordmark colored"></i>
                                        <i className="devicon-nodejs-plain-wordmark"></i>
                                        <i className="devicon-django-plain-wordmark"></i>
                                        
                                    </div>
                                </div>
                                
                                <div className="tools">
                                <div className="tech-title">Tools</div>
                                    <div className=" actual-tech tools">
                                        <i className="devicon-figma-plain colored"></i>
                                        <i className="devicon-photoshop-plain colored"></i>
                                        <i className="devicon-illustrator-plain colored"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-section" id="contact">
                    <div className="contact-sec-grid">
                        <div className="contact-details">
                            <div className="details-wrapper">
                                <h1>Let's get in touch</h1>
                                <h3>Email</h3>
                                <p>blaiseopiyo@gmail.com</p>
                                <h3>Phone</h3>
                                <p>+254746169543</p>
                                <div className="email-me-now"><a href="mailto:blaiseopiyo@gmail.com">Email me now</a></div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <footer>
                    <p><>&copy;</> <> &middot; </> Blaise Opiyo <>&middot;</> All rights reserved <>&middot;</> 2022</p>
                </footer>
            </div>
        </div>
    )
}

export default BlogHome;