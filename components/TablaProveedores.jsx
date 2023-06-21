export function TablaProveedores( { proveedores } ) {

    return (
        <table class="sm:w-full lg:max-w-max border-collapse text-center text-sm even">
            <thead class="rounded-lg h-10">
                <tr class="bg-yellow-500 text-white rounded-lg">
                    <th class="pl-3 pr-3 font-normal">ID</th>
                    <th class="pl-3 pr-3 font-normal">Nombre</th>
                    <th class="pl-3 pr-3 font-normal">RUT Comercial</th>
                    <th class="pl-3 pr-3 font-normal">Dirección</th>
                    <th class="pl-6 pr-6 font-normal"></th>
                </tr>
            </thead>
            <tbody class="font-light ">
                {proveedores.map(proveedor => {
                    return (
                        <tr key={proveedor.ID_Proveedor} class="color-nth hover:bg-yellow-100 h-10">
                            <td class="pl-3 pr-3">{proveedor.ID_Proveedor}</td>
                            <td class="pl-3 pr-3">{proveedor.Nombre}</td>
                            <td class="pl-3 pr-3">{proveedor.RUT_Comercial}</td>
                            <td class="pl-3 pr-3">{proveedor.Direccion}</td>
                            <td>
                            <button id={proveedor.ID_Proveedor} class="bg-yellow-200 hover:bg-yellow-300 rounded pl-4 pr-4" onClick={(e) => {setModal(!modal); setId(e.target.id)}}>
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