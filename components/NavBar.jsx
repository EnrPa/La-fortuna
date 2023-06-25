import Link from 'next/link';
import loading from '../public/loading.svg'

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const links = [
  {
    label: 'Principal',
    route: '/'
  }, {
    label: 'Dashboard',
    route: '/dashboard'
  }, {
    label: 'Secciones',
    route: '/secciones'
  }, {
    label: 'Empleados',
    route: '/empleados'
  }, {
    label: 'Proveedores',
    route: '/proveedores'
  }, {
    label: 'Sobre nosotros',
    route: '/sobre'
  }
]

export function NavBar() {
  let [cargando, setCargando] = useState(false)
  let [path, setPath] = useState('')
  let [pressed, setPressed] = useState('')
  let router = useRouter()

  useEffect(() => {
    
    setPath(router.pathname)

    if (path != router.pathname) {
      setCargando(false)
    }
    else {
    }
    console.log('path', path,'router.pathname',router.pathname)
  })

    return (
      <>
        <nav class="z-10 fixed flex backdrop-blur-lg w-full h-12 m-auto justify-center">
          <div class="w-12 flex justify-center">
            {cargando && <Image class="animate-spin m-2" src={loading} height={20} width={20}/>} 

          </div>
          <ul class="flex space-between">
            {links.map(({label, route}) => (
              <li key={route} class="mr-6 flex items-center justify-center">
                <Link href={route} onClick={() => {setCargando(true)}} class=" text-yellow-500 hover:text-white transition delay-50 ease-in-out hover:bg-yellow-500 p-2 rounded-lg justify-center">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div class="w-12 flex justify-center">
          </div>
        </nav>
        <div class="h-12"></div>
        <noscript>
          <div class="w-full h-6 bg-red-500 font-bold text-white rounded-b-lg inline-block grid justify-center">
            <p class="h-min">Al parecer tienes Javascript desactivado, por favor activarlo.</p>
          </div>
        </noscript>
      </>
    )
}