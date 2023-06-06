import skillsets from "../../../data/skills";
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
    </div>
    </>
}

export default Skills;