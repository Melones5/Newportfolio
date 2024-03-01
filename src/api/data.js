//importo las imágenes
import redNube from '../assets/rednube.png'
import RentalStore from '../assets/logoRental.png'
import BolosLocos from '../assets/boloslocos.png'
import Proffy from '../assets/proffy.png'
import SPA from '../assets/spa.png'
import Pesitos from '../assets/pesitos.png'

//Contruyo el objeto data y defino los datos
const data  = [
  { 
    id: 1,
    nombre: 'Pesitos',
    descripcion: 'Plataforma que permite llevar un control de Ingresos / Gastos',
    imagen: Pesitos,
    tecnologias: [
      'React',
      'Vite',
      'Tailwindcss',
      'Chartjs',
      'DayPicker'
    ]
  },
  { 
    id: 2,
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
    id: 3,
    nombre: 'Rental Store',
    descripcion: 'Tienda de alquiler que ofrece una variedad de productos',
    imagen: RentalStore,
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
    id: 4,
    nombre: 'Bolos Locos',
    descripcion: 'Proyecto que nace como complemento a un plan de negocio (Práctica profesional II - Tec. en Adminitración)',
    imagen: BolosLocos,
    tecnologias: [
      'React',
      'React-router-dom',
      'Boostrap',        
    ]
  },    
  {
    id: 5,
    nombre: 'Proffy',
    descripcion: 'Aplicación de profesores Mobile',
    imagen: Proffy,
    tecnologias: [
      'React',
      'React-native',
      'Axios',
      'Expo'             
    ]
  },    
  {
    id: 6,
    nombre: 'SPA',
    descripcion: 'SPA (single page aplication) con consumo de API REST en formato JSON',
    imagen: SPA,
    tecnologias: [
      'Vuejs',
      'Nodejs',
      'Materialize'               
    ]
  }, 
]

//exporto los datos
export default data;