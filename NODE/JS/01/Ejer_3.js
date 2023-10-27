import fs from fs
/**
 *  Explica qué hace la funcion.Identifica y corrige los errores en el siguiente código.
 * Si ves algo innecesario, elimínalo. -> el setTimeout sobra
 * Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.
 * 
 * 
```javascript
  export function procesarArchivo() {
    fs.readFile('input.txt', 'utf8', (error, contenido) => {
      if (error) {
        console.error('Error leyendo archivo:', error.message);
        return false;
      }

      setTimeout(() => {
        const textoProcesado = contenido.toUpperCase();

        fs.writeFile('output.txt', textoProcesado, error => {
          if (error) {
            console.error('Error guardando archivo:', error.message);
            return false;
          }

          console.log('Archivo procesado y guardado con éxito');
          return true
        });

      }, 1000);
    });
  }
```
 * 
 */

export function procesarArchivo ( callback ) {
  fs.readFile( 'input.txt', 'utf8', ( error, contenido ) => {
    if ( error )
    {
      console.error( 'Error leyendo archivo:', error.message );
      callback( error )
    }

    // setTimeout( () => {
    const textoProcesado = contenido.toUpperCase();

    fs.writeFile( 'output.txt', textoProcesado, error => {
      if ( error )
      {
        console.error( 'Error guardando archivo:', error.message );
        callback( error )
      }

      console.log( 'Archivo procesado y guardado con éxito' );
      callback( null )
    } );

    // }, 1000 );
  } );
}