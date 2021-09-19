const express = require('express') // Importar la libreria de express
const app = express.Router()

const controlador = require("../controllers/mock_data.controller")

// Endpoint consulta de pokemones
app.get('/mock_data', (req, res) => {
    controlador.consultar_pokemones().then(respuesta_controlador => {
        res.send(respuesta_controlador)
    }).catch(error => {
        console.log("error", error);
        res.send(error)
    })
})

//End point quick sort de ataque
app.get('/quick_sort_pokemones_ataque', (req, res) => {
    controlador.quicksort_pokemones().then(respuesta_controlador => {
        res.send(respuesta_controlador)
    }).catch(error => {
        console.log("error", error);
        res.send(error)
    })
})

module.exports = app