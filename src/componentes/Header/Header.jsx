import { useRef } from 'react';
import myCV from '../../cv/LuzSallietti-curriculum.pdf';

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
                <div className='typewriter'>               
                    <h1>Hola mundo!</h1>
                </div>
                <p>Soy Luz, estudiante de desarrollo web y comunicadora social. Me encanta resolver problemas de manera creativa, traducir ideas en productos que aportan soluciones y cautivan al usuario.<br></br>
                <span className='profile-btn'><a href="https://www.github.com/LuzSallietti" target="_blank"><i className="fab fa-github"></i></a></span>
                <span className='profile-btn'><a href="https://ar.linkedin.com/in/luzsallietti" target="_blank"><i className="fab fa-linkedin-in"></i></a></span>
                <span className='profile-btn'><a href={myCV} target="_blank">mi cv</a></span>
                </p>                
            </div>
           
        </section>
    </header>
    </>
}

export default Header;