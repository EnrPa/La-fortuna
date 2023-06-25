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


export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Solo POST' })
      return
    }
    const body = req.body
    console.log(body)
    /*
    const reRut = new RegExp(/^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/)
    const reNum = new RegExp(/^\d+$/)

    console.log(reRut.test(body.rut))

    // Validación
    if (body.nombre == '' || body.nombre.length >= 30) {
      res.status(400).send({message: 'Nombre inválido'})
      return
    }
    else if (!reRut.test(body.rut)) {
      res.status(400).send({message: 'RUT inválido'})
      return
    } else if (!reNum.test(body.telefono)) {
      res.status(400).send({message: 'Teléfono inválido'})
      return
    } else if (!reNum.test(body.salario)) {
      res.status(400).send({message: 'Salario inválido'})
    }*/

    try {
      var poolConnection = await sql.connect(config);
      console.log("Pidiendo información...");
      var resultSet = await poolConnection.request().query(`SELECT ID_Empleado FROM Empleado WHERE ID_Empleado = 1`);
      console.log(resultSet.recordset)
      await poolConnection.query(`INSERT INTO Encargado (ID_Encargado, ID_Seccion) VALUES (${body.empleado},${body.seccion})`);

    } catch (err) {
      console.error("Error: "+err.message);
  }
  res.status(200).send({message: 'Guardado!'})
  return
}