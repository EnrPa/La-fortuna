import { TablaProductos } from '../../../components/TablaProductos';
import { TablaProductoProveedor } from '../../../components/TablaProductosProveedor';
import ContainerLayout from '../../../components/containerLayout';

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

      var resultSet = await poolConnection.request().query(`SELECT * FROM Producto WHERE ID_Seccion=${context.params.id}`);
      console.log(resultSet.recordset)
      if (resultSet.recordset.length == 0) {
        return {
            notFound: true
        }
      } 
      
      console.log(`${resultSet.recordset.length} columnas devueltas.`);
      return {
        props: {
          productos: resultSet.recordset,
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

export default function ProductosSeccion({ productos }) {
  return (
    <ContainerLayout>
      <h1>Productos</h1>
      <TablaProductos productos={productos}/>
    </ContainerLayout>
  )
}