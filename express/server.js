import express from 'express'
import { Contenedor } from './productos.js'
import fs from 'fs'

const app = express()

const db = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))

const prods = new Contenedor(db)

app.get('/', (req, res) => {
	res.send('Este es el inicio ')
})

// a) Ruta get '/productos' que devuelva un array con todos los productos dsisponibles en el servidor
app.get('/productos', async (req, res) => {
	const getAll = await prods.getAll()
	res.send(getAll)
})

//b) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
app.get('/productoRandom', async (req, res) => {
	const getRandom = await prods.getRandomProduct()
	res.send(getRandom)
})

const PORT = 8080

app.listen(PORT, () => {
	console.log(`corriendo`)
})
