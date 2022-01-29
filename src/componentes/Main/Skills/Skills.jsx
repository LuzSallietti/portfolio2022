import skillsets from "../../../data/skills";
import illustrator from '../../../img/illustrator.svg';
import photoshop from '../../../img/photoshop.svg';
import english from '../../../img/en.svg';
import spanish from '../../../img/sp.svg';
import italian from '../../../img/it.svg';
import portuguese from '../../../img/pt.svg';
import './skills.scss';

const Skills = () => {
    return <>
    <div className="skills" id="skills" data-aos='fade-left'>
        <h2 className="skills__title">Skillsets</h2>
        <h3>Desarrollo Web</h3>
        <ul className="skills__ul">
            {skillsets.map( oneSkill => {
                return <>
                <li key={oneSkill.name}>
                    <div className="skill__div">
                        <i className={oneSkill.icon}></i>
                        <p>{oneSkill.name}</p>
                    </div>
                </li>
                </>
            })}        
        </ul>
        <h3>Diseño Gráfico </h3>
        <ul className="skills__ul">
            <li>
                <div className="skill__div">
                    <img src={illustrator} alt="illustrator icon"></img>
                    <p>Adobe Illustrator</p>                
                </div>            
            </li>
            <li>
                <div className="skill__div">
                    <img src={photoshop} alt="photoshop icon"></img>
                    <p>Adobe Photoshop</p>                
                </div>
            </li>
        </ul>
        <h3>Idiomas</h3>
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
                    <p>Portugués (A1)</p>                
                </div>
            </li>
        </ul>
    </div>
    </>
}

export default Skills;