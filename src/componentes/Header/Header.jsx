import { useRef } from 'react';
import { Link } from 'react-router-dom';
import glasses from '../../img/glasses.svg';
import rainbow from '../../img/rainbow.svg';
import disk from '../../img/disk.svg';
import snickers from '../../img/snickers.svg';
import profile from '../../img/luz.png';
import './header.scss'
const Header = () => {
    
    const toggler = useRef()
    const menu = useRef();

    const showMenu = () => {
        toggler.current.classList.toggle("header-bars-active");
        menu.current.classList.toggle("menu-visible");             
    }

    return <>
    <header>
        <div className='header-bars' ref={toggler}>
            <i className="fas fa-bars" onClick={showMenu}></i>            
        </div>
        <nav className='header-nav menu-hidden' ref={menu}>
            <ul>
                <li><a href='about'>Quién soy</a></li>
                <li><a href='#education'>Educación</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Proyectos</a></li>                
                <li><a href='#contact' className='btn'>Contactame</a></li>
            </ul>
        </nav>
        <section id='about' className='about'>
            <div className='about-intro'>
                <div className='about-intro-img glasses'>
                    <img src={glasses} alt=""></img>                
                </div>
                <div className='about-intro-img rainbow'>
                    <img src={rainbow} alt="">                    
                    </img>
                </div>
                <div className='about-intro-img disk'>
                    <img src={disk} alt="">                       
                    </img>
                </div>
                <div className='about-intro-img snickers'>
                    <img src={snickers} alt="">                        
                    </img>
                </div>                
                <h1>Hola mundo!</h1>
                <p>Soy Luz, estudiante de desarrollo web y comunicadora social. Me encanta resolver problemas de manera creativa, traducir ideas en productos que resuelven problemas y cautivan al usuario.<br></br>
                <span className='profile-btn'><a href="https://www.github.com/LuzSallietti" target="_blank"><i className="fab fa-github"></i></a></span>
                <span className='profile-btn'><a href="https://ar.linkedin.com/in/luzsallietti" target="_blank"><i className="fab fa-linkedin-in"></i></a></span>
                <span className='profile-btn'><Link to="#">mi cv</Link></span>
                </p>                
            </div>
            <div className='about-photo' data-aos="fade-up-left">
                <img src={profile} alt=""></img>
            </div>
        </section>
    </header>
    </>
}

export default Header;