import microphone from '../../../img/microphone.svg'
import diskette from '../../../img/diskette.svg'
import videogame from '../../../img/videogame.svg'

import './education.scss';

const Education = () => {
    return <>
    <div className='education' id='education' data-aos='fade-up-right'>
        <h2 className='education__title'>Formación académica</h2>
        <ul className='education__ul'>
            <li className='education__ul--list'>
                <div className='education__icon'><img src={videogame} alt="" /></div>
                <div>
                    <p className='education__degree'>Certified Tech Developer (2021 - en curso)</p>
                    <p className='education__school'>Digital House - Beca Accenture TechnoloShe</p>
                </div>
            </li>
            <li className='education__ul--list'>
                <div className='education__icon'><img src={diskette} alt="" /></div>
                <div>
                    <p className='education__degree'>Desarrollo Web Full Stack (2020)</p>
                    <p className='education__school'>Acámica</p>
                </div>
            </li>
            <li className='education__ul--list'>
                <div className='education__icon'><img src={microphone} alt="" /></div>
                <div>
                    <p className='education__degree'>Lic. en Comunicación Social (2002 - 2009)</p>
                    <p className='education__school'>Universidad Nacional de Córdoba</p>
                </div>
            </li>
        </ul>
    </div>
    </>
}

export default Education;