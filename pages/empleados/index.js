import { useEffect, useState } from "react";
import { TablaEmpleados } from "../../components/TablaEmpleados";
import ContainerLayout from "../../components/containerLayout";
import Head from 'next/head'
import { data } from "autoprefixer";
import Link from "next/link";
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
  
      console.log(`${resultSet.recordset.length} columnas devueltas.`);
      return {
        props: {
          empleados: resultSet.recordset
        }
      }
  
    } catch (err) {
      console.error("Errooooooooooooooooooooooooooooooooooor: "+err.message);
      return {
        props: {
          empleados: resultSet.recordset
        }
      }
  }
}

export default function Empleados({ empleados }) {
  let [registrar, setRegistrar] = useState(false)

    return (
        <ContainerLayout>
            <h1>Empleados</h1>

            <Link href="empleados/registrar">registrar</Link>


              <TablaEmpleados empleados={empleados}/>
        </ContainerLayout>

        )
}