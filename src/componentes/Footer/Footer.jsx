import '../../pages/homeEs.scss';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <>
    <footer className='footer'>
        <div className='wrapper'>
            <div className='footer__copy'>
                <i class="far fa-copyright"></i>
                <span>Desarrollado por M. Luz Sallietti</span>
            </div>
            <nav className='footer__nav'>
                <ul>
                    <li><Link to="https://github.com/LuzSallietti"><i class="fab fa-github"></i></Link></li>
                    <li><Link to="https://ar/linkedin.com/luzsallietti"><i class="fab fa-linkedin-in"></i></Link></li>                
                </ul>
            </nav>
        </div>
    </footer>
    </>
}

export default Footer;