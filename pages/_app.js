import Head from 'next/head'
import '../styles/globals.css'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'


// Mover a un componente.
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>La Fortuna</title>
        <meta name="description" content='Sistema de administración de Supermercado La Fortuna'/>
      </Head>
        
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
