import Barcode from "react-barcode"


export function TablaProductos( {productos} ) {


  return (<>
      <table class="sm:w-full lg:max-w-max border-collapse text-center text-sm even">
          <thead class="rounded-lg h-10">
              <tr class="bg-yellow-500 text-white rounded-lg">
                  <th class="pl-3 pr-3 font-normal">ID</th>
                  <th class="pl-3 pr-3 font-normal">Nombre</th>
                  <th class="pl-3 pr-3 font-normal">Precio Compra</th>
                  <th class="pl-3 pr-3 font-normal">IVA</th>
                  <th class="pl-3 pr-3 font-normal">Margen Ganancia</th>
                  <th class="pl-3 pr-3 font-normal">Venta Público</th>
                  <th class="pl-6 pr-6 font-normal">Cota Inferior</th>
                  <th class="pl-6 pr-6 font-normal">Código Barra</th>
              </tr>
          </thead>
          <tbody class="font-light ">
              {productos.map(producto => {
                  return (
                      <tr key={producto.Codigo_Barras} class="color-nth hover:bg-yellow-100 h-16">
                          <td class="pl-3 pr-3">{producto.Codigo_Barras}</td>
                          <td class="pl-3 pr-3">{producto.Descripcion}</td>
                          <td class="pl-3 pr-3 row_color">{producto.Precio_Compra}</td>
                          <td class="pl-3 pr-3">{producto.Precio_Compra * 0.19}</td>
                          <td class="pl-3 pr-3">{producto.Margen_Ganancia}</td>
                          <td class="pl-3 pr-3">{producto.Monto_IVA + producto.Precio_Compra + producto.Margen_Ganancia}</td>
                          <td class="pl-3 pr-3">{producto.Cota_Inferior}</td>
                          <td>
                            <div class="min-w-min h-12">
                            {
                              <Barcode value={`${producto.Codigo_Barras}-${producto.Descripcion}`} width={2} height={30} fontSize={0} background="transparent"/>
                            }

                            </div>
                          </td>
                      </tr>      
                  )
              })}
          </tbody>
      </table>
      </>
  )
}