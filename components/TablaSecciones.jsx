import { useState } from "react"
import { ModalEmpleados } from "./Modal"

function handleEditar({params}) {
    alert('editar')
}


export function TablaSecciones( {secciones} ) {
    let [id ,setId] = useState()
    let [modal, setModal] = useState(false)
    console.log(modal)
    return (
        <table class="sm:w-full lg:max-w-max border-collapse text-center text-sm even">
            <thead class="rounded-lg h-10">
                <tr class="bg-yellow-500 text-white rounded-lg">
                    <th class="pl-3 pr-3 font-normal">ID</th>
                    <th class="pl-3 pr-3 font-normal">Nombre</th>
                    <th class="pl-6 pr-6 font-normal"></th>
                </tr>
            </thead>
            <tbody class="font-light ">
                {secciones.map(seccion => {
                    return (
                        <tr key={seccion.id_seccion} class="color-nth hover:bg-yellow-100 h-10">
                            <td class="pl-3 pr-3">{seccion.id_seccion}</td>
                            <td class="pl-3 pr-3">{seccion.Nombre}</td>
                            <td>
                            <button class="bg-yellow-200 hover:bg-yellow-300 rounded pl-4 pr-4" onClick={(e) => {setModal(!modal); setId(e.target.id)}}>
                                Editar
                            </button>
                            </td>
                        </tr>        
                    )
                })}
            </tbody>
        </table>
    )
}