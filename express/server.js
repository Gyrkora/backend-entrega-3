/* Explicación 

Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los sgtes endpoints en el puerto 8080

2) Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para accder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

 */

import express from 'express'
// import productos from 'productos.json'

const app = express()

app.get('/', (req, res) => {
	res.send('Este es el inicio')
})

// a) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
app.get('/productos', (req, res) => {
	res.send(`acá van los productos`)
})

//b) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
app.get('/productosRandom', (req, res) => {
	res.send(`acá productos random`)
})

const PORT = 8080

app.listen(PORT, () => {
	console.log('servidor http en puerto 3000')
})

// app.get('/fyh', (req, res) => {
// 	res.send({
// 		fyh: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
// 	})
// })
