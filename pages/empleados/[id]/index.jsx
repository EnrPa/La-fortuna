import { useEffect, useState } from 'react';
import ContainerLayout from '../../../components/containerLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import loading from '../../../public/loading.svg'

const sql = require('mssql');

const config = {
  server: 'lafortuna.database.windows.net',
  user: 'lafortuna',
  password: 'Vm0SQjFhtthr1oegsLvgEQu9kOVG3VT37xN8JbrhTadaXxsrjLfDG2mF1QT8DHKUDuoGJZ3NSPjytZpr0bu74kOZfusUfUwlBFHsbee7CdEU031DxcKvwMFXJ8lNlD8w',
  database: 'database',
  multipleStatements: true,
  authentication: {
    type: 'default'
},
options: {
    encrypt: true
}
}

export async function getServerSideProps( context ) {
    try {
      var poolConnection = await sql.connect(config);
      console.log("Pidiendo información...");

      var resultSet = await poolConnection.request().query(`SELECT * from Empleado WHERE ID_Empleado=${context.params.id}`);
      var seccionesEncargado = await poolConnection.request().query(`SELECT ID_Encargado from Encargado WHERE ID_Encargado=${context.params.id}`);

      if (resultSet.recordset.length == 0) {
        return {
            notFound: true
        }
      } 
      
      console.log(`${resultSet.recordset.length} columnas devueltas.`);
      return {
        props: {
          empleado: resultSet.recordset,
          seccion: seccionesEncargado.recordset
        }
      }
  
    } catch (err) {
      console.error("Error: "+err.message);
      return {
        props: {
          empleado: {}
        }
      }
  }
}



export default function IDEmpleado({ empleado, seccion }) {
  console.log(seccion)
 let [editar, setEditar] = useState(false)
 let [nombre ,setNombre] = useState(empleado[0].Nombre)
 let [rut ,setRut] = useState(empleado[0].RUT)
 let [telefono, setTelefono] = useState(empleado[0].Telefono)
 let [direccion ,setDireccion] = useState(empleado[0].Direccion)
 let [salario ,setSalario] = useState(empleado[0].Salario_Base)
 let [msg, setMsg] = useState('')
 let [msgStatus, setMsgStatus] = useState(false)
 let [cargando, setCargando] = useState(false)


    function SendInfo() {
      setCargando(true)
      setMsg('')
        let json = {
            id: empleado[0].ID_Empleado,
            nombre: nombre,
            rut: rut,
            telefono: telefono,
            direccion: direccion,
            salario: salario
        }
        fetch('/api/accempleado', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
          }).then((r) => {
            let estado = r.status

            let respuesta = r.text();
            respuesta.then((r) => {
              setCargando(false)
              setMsgStatus(estado == 200 ? true : false)
              setMsg(JSON.parse(r).message)

            })
          })
    }

 function dejarPredeterminado() {
    setEditar(false)
    setMsg('')
    setMsgStatus(false)
    setNombre(empleado[0].Nombre)
    setRut(empleado[0].RUT)
    setTelefono(empleado[0].Telefono)
    setDireccion(empleado[0].Direccion)
    setSalario(empleado[0].Salario_Base)
 }

 useEffect(() => {
  if (editar == false) {
    setMsg('')
    setMsgStatus(false)
  }
 }) 
 

 return (
   
   <ContainerLayout>
        <Link href="/empleados">Volver</Link> 
        <h1>Empleado</h1>


        <div class="grid grid-cols-2 gap-6 content-center">
          <div>
            <form>
                <h2>ID</h2>
                <input type="text" class="bg-red-100" disabled defaultValue={empleado[0].ID_Empleado}/>
                <h2>Nombre</h2>
                <input type="text" class="bg-red-100" disabled={!editar} onInput={(e) => {setNombre(e.target.value)}} value={nombre}/>
                <h2>RUT</h2>
                <input type="text" class="bg-red-100" disabled={!editar} onInput={(e) => {setRut(e.target.value)}} value={rut}/>
                <h2>Telefono</h2>
                <input type="text" class="bg-red-100" disabled={!editar} onInput={(e) => {setTelefono(e.target.value)}} value={telefono}/>
                <h2>Dirección</h2>
                <input type="text" class="bg-red-100" disabled={!editar} onInput={(e) => {setDireccion(e.target.value)}} value={direccion}/>
                <h2>Salario Base</h2>
                <input type="text" class="bg-red-100" disabled={!editar} onInput={(e) => {setSalario(e.target.value)}} value={salario}/>
            </form>
            <button onClick={() => {setEditar(!editar)}}>Editar información</button>
          </div>
          <div>
                <aside className={`${editar ? 'visible opacity-100' : 'invisible opacity-0'} transition ease-in-out w-full h-min p-2 bg-white w-full pb-10 drop-shadow-lg pt-10 min-h-min rounded-lg border-solid border-blue-500 text-center duration-200 ease-out transition transform origin-top-right`}>
                    <h5>Opciones</h5>
                    <div class="flex justify-around">
                        <button class="bg-yellow-500" onClick={() => {SendInfo()}}>Guardar</button>
                        <button class="bg-red-500" onClick={() => {dejarPredeterminado()}}>Descartar</button>
                    </div>
                    <div className={`${(msg != '' && msgStatus) ? 'bg-green-500': 'bg-gray-300'} flex justify-center w-full p-2 mt-2 rounded-lg h-12 font-bold transition delay-10 ease-in-out`}>
                      {cargando ?  <Image class="animate-spin" src={loading} height={20} width={20}/> : <p>{msg}</p> }

                    </div>
                </aside>
          </div>
        </div>
    </ContainerLayout>

 )
}