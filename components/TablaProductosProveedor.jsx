import { useState } from "react"

export function TablaProductoProveedor( {productos} ) {
  return (<>
      <table class="sm:w-full lg:max-w-max border-collapse text-center text-sm even">
          <thead class="rounded-lg h-10">
              <tr class="bg-yellow-500 text-white rounded-lg">
                  <th class="pl-3 pr-3 font-normal">ID</th>
                  <th class="pl-3 pr-3 font-normal">Nombre</th>
                  <th class="pl-3 pr-3 font-normal">Precio</th>
              </tr>
          </thead>
          <tbody class="font-light ">
              {productos.map(producto => {
                  return (
                      <tr key={producto.ID_Producto} class="color-nth hover:bg-yellow-100 h-10">
                          <td class="pl-3 pr-3">{producto.ID_Producto}</td>
                          <td class="pl-3 pr-3">{producto.Descripcion}</td>
                          <td class="pl-3 pr-3">{producto.Precio}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
      </>
  )
}