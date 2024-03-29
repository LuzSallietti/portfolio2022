import './main.scss';
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Project from './Project/Project';
import line from '../../img/line.svg';
import Languajes from './Languages/Languajes';

const Main = () => {
    return <>
    <main>
        <section className="training">
            <div className='training__divider' data-aos="fade-down">
                <img src={line} alt=""></img>
            </div>
            <Education/>
            <Languajes/>            
            <Skills/>            
            <div className='training__divider' data-aos="fade-down">
                <img src={line} alt=""></img>
            </div>
        </section>
        <Project/>
    </main>
    </>
}
export default Main;