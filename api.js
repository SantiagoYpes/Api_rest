const express = require('express') // Importar la libreria de express
const app = express()  // Inicializar el express
const port = 3000


// Importar pokemones router
const pokemones_router = require("./routers/mock_data.router")
app.use(pokemones_router)


// Levantar el servicio para escuchar las solicitudes (request-req)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





// Require library
var Excel = require('Excel4node');

// Create a new instance of a Workbook class
var workbook = new Excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');
var worksheet2 = workbook.addWorksheet('Sheet 2');

// Create a reusable style
var style = workbook.createStyle({
  font: {
    color: '#FF0800',
    size: 12
  },
});

// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(1,1).number(100).style(style);