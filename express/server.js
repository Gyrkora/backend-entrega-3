/* Explicación 

Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los sgtes endpoints en el puerto 8080

2) Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para accder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

 */

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

// const prodRandom = () => {
// 	let randomNum = Math.floor(Math.random() * db.length)
// 	const getRandom = db[randomNum]
// 	return getRandom
// 	// return db.length
// }

app.get('/productoRandom', async (req, res) => {
	const getRandom = await prods.getRandomProduct()
	res.send(getRandom)
})

const PORT = 8080

app.listen(PORT, () => {
	console.log(`corriendo`)
})
