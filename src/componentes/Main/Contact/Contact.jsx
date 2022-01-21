import { Link } from "react-router-dom";
import '../../Header/header.scss';
import './contact.scss';

const Contact = () => {
    return <>
        <section className="contact">
            <h2>¿Charlamos?</h2>
            <p>Si crees que puedo sumarme a tu equipo o tenés algún proyecto en mente y pensas que te puedo ayudar como freelancer, escribíme. Voy a estar muy contenta con tu mensaje.</p>
            <Link to="mailto:luzsallietti@gmail.com" className="btn">Contactame</Link>
        </section>
    </>
}
export default Contact;