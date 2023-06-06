import React from 'react'
import english from '../../../img/en.svg';
import spanish from '../../../img/sp.svg';
import italian from '../../../img/it.svg';
import portuguese from '../../../img/pt.svg';

const Languajes = () => {
  return (
    <div className="languajes" id="languajes" data-aos='fade-left'>
        <h2 className="skills__title">Idiomas</h2>    
        <ul className="skills__ul">
            <li>
                <div className="skill__div">
                    <img src={spanish} alt="spanish icon"></img>
                    <p>Español (Nativo)</p>                
                </div>            
            </li>
            <li>
                <div className="skill__div">
                    <img src={english} alt="english icon"></img>
                    <p>Inglés (B2)</p>                
                </div>
            </li>
            <li>
                <div className="skill__div">
                    <img src={italian} alt="italian icon"></img>
                    <p>Italiano (B2)</p>                
                </div>
            </li>
            <li>
                <div className="skill__div">
                    <img src={portuguese} alt="portuguese icon"></img>
                    <p>Portugués (Intermedio)</p>                
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Languajes
