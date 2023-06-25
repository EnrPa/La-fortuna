import ContainerLayout from "../../components/containerLayout";

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
      var empleados = await poolConnection.request().query(`SELECT * from Empleado`);
      var secciones = await poolConnection.request().query(`SELECT * from Seccion`);
  
      return {
        props: {
          empleados: empleados.recordset,
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

export default function Dashboard({ empleados }) {

    return (
        <ContainerLayout>
            <h1>Dashboard</h1>
            <p>{empleados.length} empleados</p>
        </ContainerLayout>
    )
}