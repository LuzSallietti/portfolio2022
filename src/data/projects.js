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
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.',
        site:'https://react-movflix-luzsallietti.vercel.app/',
        repo:'https://github.com/LuzSallietti/react-movflix',
        image: movflix,
        techIcons:['fab fa-react', 'fab fa-bootstrap']
    },
    {
        id: 2,
        name: 'Inrush',
        type: 'Landing Page y Blog',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.',
        site:'https://inrush-site-luzsallietti.vercel.app/',
        repo:'https://github.com/LuzSallietti/inrush-site',
        image: inrush,
        techIcons:['fab fa-react', 'fab fa-bootstrap', 'fab fa-wordpress', 'fab-fa-sass' ]
    },
    {
        id: 3,
        name: 'Gifos',
        type: 'Single Page Application',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.',
        site:'https://luzsallietti.github.io/ProyectoGifos/',
        repo:'https://github.com/LuzSallietti/ProyectoGifos/',
        image: gifos,
        techIcons:['fab fa-js-html5', 'fab fa-sass','fab fa-js-square']
    },
    {
        id: 4,
        name: 'CumpleKits',
        type: 'E-commerce',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.',
        site:'https://www.cumplekits.com/',
        image: cumplekits,
        techIcons:['fab fa-wordpress', 'fab fa-css3-alt']
    },
    {
        id: 5,
        name: 'Expice',
        type: 'Landing Page',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut illum dicta sint et laudantium, commodi pariatur repellendus culpa veniam quasi esse. Corporis veniam atque culpa laborum nam velit magni tempore.',
        site:'https://expice-landingpage.vercel.app/',
        repo:'https://github.com/LuzSallietti/expice-landingpage',
        image: expice,
        techIcons:['fab fa-html5','fab fa-sass']
    }
]

export default projectsDB;