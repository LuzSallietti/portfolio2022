import './homeEs.scss';
import Header from "../componentes/Header/Header";
import Main from '../componentes/Main/Main';
import Contact from '../componentes/Main/Contact/Contact';
import Footer from '../componentes/Footer/Footer';

const HomeES = () => {
    return <>
    <div className="wrapper">
        <Header/>
        <Main/>       
    </div>
    <Contact/>
    <Footer/>
    </>

}

export default HomeES;