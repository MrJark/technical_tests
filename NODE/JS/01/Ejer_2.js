/**
  Ejer. 2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:
  //! Este es un ejercicio SUPER TÍPICO Y QUE TIENES QUE SABER HACER
  export function obtenerDatosPromise ( callback ) {
    setTimeout( () => {
      callback( null, { data: 'datos importantes' } );
    }, 2000 );
  }
*/

// las promesas tienen clases constructoras
export function obtenerDatosPromise () {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( { data: 'datos importantes' } );
    }, 2000 );
  } )
}

// Con promises.then()
// obtenerDatosPromise()
//   .then( info => {
//     console.log( info )
//   } )

// // con async/await
// const info = await obtenerDatosPromise()
// console.log( info )