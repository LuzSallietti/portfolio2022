import movflix from '../../../img/movflix.png';
import './project.scss';

const Project = () => {
    return <>
    <section className='projects'>
        <h2>Proyectos</h2>
        <i class="fas fa-chevron-left projects__chevron"></i>
        <article className='project'>
            <div className='project__img'>
                <div className="project__img--container">
                    <img src={movflix} alt="pantalla principal de proyecto" />
                </div>
                <ul className='project__img--icons'>                    
                    <li>
                        <i class="fab fa-react"></i>
                    </li>
                    <li>
                        <i class="fab fa-bootstrap"></i>
                    </li>
                </ul>
            </div>
            <div className='project__details'>
                <span>Single Page Application</span>
                <h3>Movflix</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.</p>
                <a href="#" className='project__details--btn'>Ver online</a>
                <a href="#" className='project__details--btn'>Repositorio</a>
            </div>
        </article>
        <i class="fas fa-chevron-right projects__chevron"></i>
    </section>
    </>
}

export default Project