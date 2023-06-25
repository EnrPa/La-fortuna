import { TablaProveedores } from "../../components/TablaProveedores";
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

export async function getStaticProps() {
    try {
      var poolConnection = await sql.connect(config);
      console.log("Pidiendo información...");
      var resultSet = await poolConnection.request().query(`SELECT * from Proveedor`);
  
      console.log(`${resultSet.recordset.length} columnas devueltas.`);
      return {
        props: {
          proveedores: resultSet.recordset
        }
      }
  
    } catch (err) {
      console.error("FUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKFFUCKFUCKFUCKF: "+err.message);
      return {
        props: {
          proveedores: {}
        }
      }
  }
}

export default function Proveedores({ proveedores }) {
    return (
        <ContainerLayout>
            <h1>Proveedores</h1>
              <TablaProveedores proveedores={proveedores}/>
        </ContainerLayout>
        )
}