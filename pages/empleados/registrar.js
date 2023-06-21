import { useEffect, useState } from 'react';

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

export async function getServerSideProps() {
    try {
      var poolConnection = await sql.connect(config);
      console.log("Pidiendo información...");
      var resultSet = await poolConnection.request().query(`SELECT * from Empleado`);
      var secciones = await poolConnection.request().query(`SELECT * FROM Seccion`)
      console.log(`${resultSet.recordset.length} columnas devueltas.`);
      return {
        props: {
          empleados: resultSet.recordset,
          secciones: secciones.recordset
        }
      }
  
    } catch (err) {
      console.error("Errooooooooooooooooooooooooooooooooooor: "+err.message);
      return {
        props: {
          empleados: {}
        }
      }
  }
}

export default function RegistrarSeccion({ empleados, secciones }) {
    console.log(empleados[0])
    console.log(secciones)
    let [seccion, setSeccion] = useState('')
    let [empleado, setEmpleado] = useState('')

    function sendInfo() {
        let json = {
            seccion: seccion,
            empleado: empleado
        }
        fetch('/api/registroSecc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
          }).then((r) => {
            let estado = r.status

            let respuesta = r.text();
            respuesta.then((r) => {
              console.log(JSON.parse(r).message)

            })
          })
    }

    return <>
        <label for="empleado">Empleado</label>
        <select name="empleado" onChange={(e) => {setEmpleado(e.target.value)}}> 
            {empleados.map((e) => (
                <option value={e.ID_Empleado} >{e.Nombre}</option>
                ))}
        </select>
        <label for="seccion">Sección</label>
        <select name="seccion" onChange={(e) => {setSeccion(e.target.value)}}> 
            {secciones.map((s) => (
                <option value={s.id_seccion}>{s.Nombre}</option>
                ))}
        </select>

        <button onClick={sendInfo}>Guardar</button>
    </>
}