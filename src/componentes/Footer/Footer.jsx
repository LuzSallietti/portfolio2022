import '../../pages/homeEs.scss';
import './footer.scss';

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
                    <li><a href="https://github.com/LuzSallietti" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href='https://ar.linkedin.com/in/luzsallietti' target="_blank"><i class="fab fa-linkedin-in"></i></a></li>                
                </ul>
            </nav>
        </div>
    </footer>
    </>
}

export default Footer;