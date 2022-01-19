import './main.scss';
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import line from '../../img/line.svg';

const Main = () => {
    return <>
    <main>
        <section className="training">
            <div className='training__divider'>
                <img src={line} alt=""></img>
            </div>
            <Education/>
            <Skills/>
            <div className='training__divider'>
                <img src={line} alt=""></img>
            </div>
        </section>

    </main>
    </>
}
export default Main;