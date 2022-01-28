import movflix from '../img/movflix.png';
import inrush from '../img/inrush.png';
import gifos from '../img/gifos.png';
import cumplekits from '../img/cumplekits.png';
import expice from '../img/expice.png';

const projectsDB = [
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
        name: 'CumpleKits',
        type: 'E-commerce',
        description: 'Tienda online desarrollada en Wordpress con Woocommerce. Integración de plugins para personalización de producto, medios de pago y moneda múltiple.',
        site:'https://www.cumplekits.com/',
        image: cumplekits,
        techIcons:['fab fa-wordpress', 'fab fa-css3-alt']
    },
    {
        id: 5,
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