import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
        <section id='about'>
            <div>
                <div>
                    <img src="" alt="">                        
                    </img>
                </div>
                <div>
                    <img src="" alt="">                        
                    </img>
                </div>
                <div>
                    <img src="" alt="">                       
                    </img>
                </div>
                <div>
                    <img src="" alt="">                        
                    </img>
                </div>
                <div>
                    <img src="" alt="">                        
                    </img>
                </div>
                <h1>Hola mundo!</h1>
                <p>Soy Luz, estudiante de desarrollo web y comunicadora social. Me encanta resolver problemas de manera creativa, traducir ideas en productos que resuelven problemas y cautivan al usuario.</p>
            </div>
            <div>
                <img src="" alt=""></img>
            </div>
        </section>
    </header>
    </>
}

export default Header;