import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './form.scss';

export const Form = () => {
    const form = useRef();
    const success = useRef();
    const error = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ga1fy5v', 'template_my8l57m', form.current, 'user_EvdyyDE5sSdnDLSMv79Pc')
        .then((result) => {
            form.current.reset();
            success.current.style.display="block";
            setTimeout(() => {
                success.current.style.display="none";                
            }, 2000);
        }, (error) => {
            success.current.style.display="block";
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div className='form__success' ref={success}>
            <p>¡Recibido! Te responderé muy pronto.</p>
        </div>
        <div className='form__success' ref={error}>
            <p>Algo salió mail. Por favor, escribime a luzsallietti@gmail.com</p>
        </div>  
        <div className='form__group'>
            <label className='form__group--label'>Nombre</label>
            <input type="text" name="user_name" className='form__group--input' />
        </div>
        <div className='form__group'>
            <label className='form__group--label'>Email</label>
            <input type="email" name="user_email" className='form__group--input' />
        </div>
        <div className='form__group'>
        <label className='form__group--label'>Mensaje</label>
        <textarea name="message" className='form__group--input' />
        </div>
        <input type="submit" value="Enviar" className='btn' />
      </form>
    );
  };