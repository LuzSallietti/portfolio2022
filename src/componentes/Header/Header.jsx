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
                <li><Link to="https://www.cadena3.com">Quién soy</Link></li>
                <li><Link to="#education">Educación</Link></li>
                <li><Link to="#projects">Proyectos</Link></li>
                <li><Link to="#experience">Experiencia</Link></li>
                <li><Link to="#contact" className='btn'>Contactame</Link></li>
            </ul>
        </nav>
        <section id='about' className='about'>
            <div className='about-intro'>
                <div className='about-intro-img'>
                    <img src={glasses} alt=""></img>                
                </div>
                <div className='about-intro-img'>
                    <img src={rainbow} alt="">                    
                    </img>
                </div>
                <div className='about-intro-img'>
                    <img src={disk} alt="">                       
                    </img>
                </div>
                <div className='about-intro-img'>
                    <img src={snickers} alt="">                        
                    </img>
                </div>                
                <h1>Hola mundo!</h1>
                <p>Soy Luz, estudiante de desarrollo web y comunicadora social. Me encanta resolver problemas de manera creativa, traducir ideas en productos que resuelven problemas y cautivan al usuario.<br></br>
                <span className='profile-btn'><i class="fab fa-github"></i></span>
                <span className='profile-btn'><i class="fab fa-linkedin-in"></i></span>
                </p>                
            </div>
            <div className='about-photo'>
                <img src={profile} alt=""></img>
            </div>
        </section>
    </header>
    </>
}

export default Header;