import { Link } from "react-router-dom";
import { Form } from "./Form";
import '../../Header/header.scss';
import './contact.scss';

const Contact = () => {
    return <>
        <section className="contact" id="contact" data-aos="fade-up">
            <h2>¿Charlamos?</h2>
            <p>Si crees que puedo sumarme a tu equipo o tenés algún proyecto en mente y pensas que te puedo ayudar como freelancer, escribíme. Voy a estar muy contenta con tu mensaje.</p>
            <Form/>
           
        </section>
    </>
}
export default Contact;