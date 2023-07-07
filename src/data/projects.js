import movflix from '../img/movflix.png';
import planazo from '../img/planazo.png';
import inrush from '../img/inrush.png';
import gifos from '../img/gifos.png';
import expice from '../img/expice.png';
import conforma from '../img/conforma-color.png';
import thetraveltranslator from '../img/thetraveltranslator.jpg';

const projectsDB = [
    {
        id: 0,
        name: 'Planazo',
        type: 'Plataforma web full stack',
        description: 'Sistema de gestión de reservas desarrollado con ReactJS, Java y Spring Boot, deployado en AWS.',
        site:'http://planazo-hosting.s3-website.us-east-2.amazonaws.com/',
        repo:'https://gitlab.ctd.academy/ctd/hispanos/proyecto-integrador-1/proyecto-integrador-0523/1021pt-c7/equipo-05',
        image: planazo,
        techIcons:['fab fa-react', 'fab fa-java', 'fa-solid fa-database']
    },
    {
        id: 1,
        name: 'Movflix',
        type: 'Single Page Application',
        description: 'Creado con React JS, consumiendo la API de The Movie Database. Los usuarios pueden ver películas populares, buscarlas por palabra clave y almacenarlas en la sección Favoritos.',
        site:'https://react-movflix-luzsallietti.vercel.app/',
        repo:'https://github.com/LuzSallietti/react-movflix',
        image: movflix,
        techIcons:['fab fa-react', 'fab fa-bootstrap']
    },
    {
        id: 2,
        name: 'Inrush',
        type: 'Landing Page y Blog',
        description: 'Sitio instituciional creado con React JS y blog para noticias y artículos técnicos desarrollado en Wordpress. Desde el home se puede acceder a un resumen de noticias recientes, consumiendo la API de Wordpress.',
        site:'https://inrush-site-luzsallietti.vercel.app/',
        repo:'https://github.com/LuzSallietti/inrush-site',
        image: inrush,
        techIcons:['fab fa-react', 'fab fa-bootstrap', 'fab fa-wordpress', 'fab-fa-sass' ]
    },
    {
        id: 3,
        name: 'Gifos',
        type: 'Web interactiva',
        description: 'Página dinámica creada con Vanilla JS, consumiendo la API de Giphy. Los usuarios pueden buscar gifs, almacenarlos como favoritos y crear sus propios gifs. También pueden elegir visualizar la interfaz en modo diurno o nocturno.',
        site:'https://luzsallietti.github.io/ProyectoGifos/',
        repo:'https://github.com/LuzSallietti/ProyectoGifos/',
        image: gifos,
        techIcons:['fab fa-html5', 'fab fa-sass','fab fa-js-square']
    },
    {
        id: 4,
        name: 'Expice',
        type: 'Landing Page',
        description: 'Página web estática desarrollada con HTML y CSS, compilada con Sass. La UI está basada en un recurso gratuito disponible para la comunidad de usuarios de Figma.',
        site:'https://expice-landingpage.vercel.app/',
        repo:'https://github.com/LuzSallietti/expice-landingpage',
        image: expice,
        techIcons:['fab fa-html5','fab fa-sass']
    },
    {
        id: 5,
        name: 'Conforma Color',
        type: 'E-commerce',
        description: 'Tienda online creada con Tienda Nube, estilizada con CSS sobre plantilla de la plataforma. Elección y retoque de fotografías.',
        site:'https://www.conforma.com.ar/',
        image: conforma,
        techIcons:['fab fa-css3-alt']
    },
    {
        id: 6,
        name: 'The Travel Translator',
        type: 'Website',
        description: 'Diseño de UI y desarrollo en Wordpress (en progreso). Sitio de servicios profesionales utilizando plugin Translate Press para traducción múltiple y Elementor como compositor visual.',
        image: thetraveltranslator,
        techIcons:['fab fa-wordpress']
    },
    {
        id: 7,
        name: 'Expice',
        type: 'Landing Page',
        description: 'Página web estática desarrollada con HTML y CSS, compilada con Sass. La UI está basada en un recurso gratuito disponible para la comunidad de usuarios de Figma.',
        site:'https://expice-landingpage.vercel.app/',
        repo:'https://github.com/LuzSallietti/expice-landingpage',
        image: expice,
        techIcons:['fab fa-html5','fab fa-sass']
    }
]

export default projectsDB;