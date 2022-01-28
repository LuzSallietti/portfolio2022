import { useState } from 'react';
import projectsDB from '../../../data/projects';
import './project.scss';

const Project = () => {
    let [counter, setCounter] = useState(0);
    const moveCarouselRigth = (counter) => {
        counter < (projectsDB.length-1) ? setCounter(counter+1) : setCounter(0);
    }
    const moveCarouselLeft = (counter) => {
        counter === 0 ? setCounter(projectsDB.length-1) : setCounter(counter-1);
    }
    console.log(counter)
    return <>
    <section className='projects' id='projects' data-aos="fade-up">
        <h2>Proyectos</h2>
        <i class="fas fa-chevron-left projects__chevron" onClick={() => moveCarouselLeft(counter)}></i>
        <article className='project'>
            <div className='project__img'>
                <div className="project__img--container">
                    <img src={projectsDB[counter].image} alt="pantalla principal de proyecto" />
                </div>
                <ul className='project__img--icons'>                    
                    {projectsDB[counter].techIcons.map((icon, i) => {
                        return <>
                        <li key={i}><i className={icon}></i></li>
                        </>
                    })}
                </ul>
            </div>
            <div className='project__details'>
                <span>{projectsDB[counter].type}</span>
                <h3>{projectsDB[counter].name}</h3>
                <p>{projectsDB[counter].description}</p>
                {projectsDB[counter].site ? <a href={projectsDB[counter].site} className='project__details--btn'>Ver online</a> : "" }
                {projectsDB[counter].repo ? <a href={projectsDB[counter].repo} className='project__details--btn'>Repositorio</a> : ""}
            </div>
        </article>       
        <i class="fas fa-chevron-right projects__chevron" onClick={() => moveCarouselRigth(counter)}></i>
    </section>
    </>
}

export default Project