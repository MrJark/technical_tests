import net from 'node:net'

// hay que arreglar algo porque ya nos está diciendo que no funciona
//? Cuando te preguntan que arregles una función que no va SUELE estar el problema en los parámetros
export const ping = ( ip, callback ) => { //! le faltaba el callback
  const startTime = process.hrtime()

  const client = net.connect( { port: 80, host: ip }, () => {
    client.end()
    // return { time: process.hrtime( startTime ), ip } // esto no funciona
    callback( null, { time: process.hrtime( startTime ), ip } ) // en los callback el primer parámetro siempore se le pasa el error por ende, en este caso es null
  } )

  client.on( 'error', ( err ) => {
    client.end()
    callback( err )
    // throw err // no funciona
  } )
}

ping( 'mrjark.com', ( err, info ) => { // no se está ejecutando el callback ( el cual es el que le tiene que llegar arriba)
  if ( err ) console.error( err )
  else console.log( info )
} )

export default function Patata () {
  return 'patata'
}