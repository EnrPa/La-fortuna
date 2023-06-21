import Link from "next/link";
import { useState } from "react";
import loading from '../public/loading.svg'
import Image from 'next/image';



export function TablaEmpleados( {empleados} ) {

    return (<>
        <table class="sm:w-full lg:max-w-max border-collapse text-center text-sm even">
            <thead class="rounded-lg h-10">
                <tr class="bg-yellow-500 text-white rounded-lg">
                    <th class="pl-3 pr-3 font-normal">ID</th>
                    <th class="pl-3 pr-3 font-normal">Nombre</th>
                    <th class="pl-3 pr-3 font-normal">RUT</th>
                    <th class="pl-3 pr-3 font-normal">Telefono</th>
                    <th class="pl-3 pr-3 font-normal">Dirección</th>
                    <th class="pl-3 pr-3 font-normal">Salario Base</th>
                    <th class="pl-6 pr-6 font-normal"></th>
                </tr>
            </thead>
            <tbody class="font-light ">
                {empleados.map(empleado => {
                    return (
                        <tr key={empleado.ID_Empleado} class="color-nth hover:bg-yellow-100 h-10">
                            <td class="pl-3 pr-3">{empleado.ID_Empleado}</td>
                            <td class="pl-3 pr-3 row_color">{empleado.Nombre}</td>
                            <td class="pl-3 pr-3">{empleado.RUT}</td>
                            <td class="pl-3 pr-3">{empleado.Telefono}</td>
                            <td class="pl-3 pr-3">{empleado.Direccion}</td>
                            <td class="pl-3 pr-3">{empleado.Salario_Base}</td>
                            <td>
                                <Link class="bg-yellow-200 hover:bg-yellow-300 rounded pl-4 pr-4"  href={'empleados/' + empleado.ID_Empleado}>Mas Info...</Link>
                            </td>
                        </tr>        
                    )
                })}
            </tbody>
        </table>
        </>
    )
}