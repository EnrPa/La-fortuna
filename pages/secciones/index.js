import { TablaSecciones } from '../../components/TablaSecciones';
import ContainerLayout from '../../components/containerLayout';
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
    var resultSet = await poolConnection.request().query(`SELECT * from Seccion`);

    console.log(`${resultSet.recordset.length} columnas devueltas.`);
    return {
      props: {
        secciones: resultSet.recordset
      }
    }

  } catch (err) {
    console.error(" FUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKError: "+err.message);
    return {
      props: {
        empleados: {}
      }
    }
}
}


export default function Secciones({ secciones }) {
    return (
        <ContainerLayout>
            <h1>Secciones</h1>
            <TablaSecciones secciones={secciones} />
        </ContainerLayout>
    )
}