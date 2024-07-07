//importo las imágenes
import redNube from '../assets/rednube.png'
import RentalStore from '../assets/logoRental.png'
import BolosLocos from '../assets/boloslocos.png'
import Proffy from '../assets/proffy.png'
import SPA from '../assets/spa.png'
import Pesitos from '../assets/pesitos.png'
import Netflix from '../assets/netflix.jpg'

//Contruyo el objeto data y defino los datos
const data  = [
  { 
    id: 1,
    nombre: 'Netflix - Dashboard',
    descripcion: 'Análisis del dataset de Netflix (películas 1942 - 2021)',
    imagen: Netflix,
    link: 'https://github.com/Melones5/reporte_powerbi_netflix',
    tecnologias: [
      'Excel',
      'Power BI',
      'DAX',
      'Figma'
    ]
  },
  { 
    id: 2,
    nombre: 'Pesitos',
    descripcion: 'Plataforma que permite llevar un control de Ingresos / Gastos',
    imagen: Pesitos,
    link: 'https://github.com/Melones5/pesitos-app',
    tecnologias: [
      'React',
      'Vite',
      'Tailwindcss',
      'Chartjs',
      'DayPicker'
    ]
  },
  { 
    id: 3,
    nombre: 'red nube',
    descripcion: 'Plataforma que permite a personas / Pymes conectarse con oportunidades',
    imagen: redNube,
    tecnologias: [
      'React',
      'Boostrap',
      'Axios',
      'React-router-dom'
    ]
  },
  {
    id: 4,
    nombre: 'Rental Store',
    descripcion: 'Tienda de alquiler que ofrece una variedad de productos',
    imagen: RentalStore,
    link: 'https://github.com/Melones5/taller-de-integracion',
    tecnologias: [
      'React',
      'Boostrap',
      'Axios',
      'Firebase',
      'Nodejs',
      'PostgreSql',
      'PrimeReact',
      'ExpressJS',
      'Mercadopago',
      'Nodemailer',
      'AntDesing'        
    ]
  },    
  {
    id: 5,
    nombre: 'Bolos Locos',
    descripcion: 'Proyecto que nace como complemento a un plan de negocio (Práctica profesional II - Tec. en Adminitración)',
    imagen: BolosLocos,
    link: 'https://github.com/Melones5/BolosLocosFinal',
    tecnologias: [
      'React',
      'React-router-dom',
      'Boostrap',        
    ]
  },    
  {
    id: 6,
    nombre: 'Proffy',
    descripcion: 'Aplicación de profesores Mobile',
    imagen: Proffy,
    link: 'https://github.com/Melones5/ProffyMobile',
    tecnologias: [
      'React',
      'React-native',
      'Axios',
      'Expo'             
    ]
  },    
  {
    id: 7,
    nombre: 'SPA',
    descripcion: 'SPA (single page aplication) con consumo de API REST en formato JSON',
    imagen: SPA,
    link: 'https://github.com/Melones5/FinalAvanzada',
    tecnologias: [
      'Vuejs',
      'Nodejs',
      'Materialize'               
    ]
  }, 
]

//exporto los datos
export default data;