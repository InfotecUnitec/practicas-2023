## Introducción a Node.js

Node.js es un entorno de ejecución de JavaScript que se utiliza principalmente en el lado del servidor para desarrollar aplicaciones web escalables. Una de las ventajas de Node.js es su capacidad para realizar operaciones de entrada/salida (I/O) de manera asíncrona, lo que significa que puede manejar múltiples solicitudes simultáneamente sin bloquear el hilo principal de ejecución.

## Módulo fs

El módulo "fs" es un módulo incorporado en Node.js que proporciona una API para interactuar con el sistema de archivos del sistema operativo. Con este módulo, podemos leer y escribir archivos, crear y eliminar directorios, y realizar muchas otras operaciones relacionadas con el sistema de archivos.

El módulo "fs" nos permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en el sistema de archivos. Podemos realizar estas operaciones tanto de manera síncrona como asíncrona.

## Operaciones CRUD Síncronas

Las operaciones síncronas bloquean el hilo principal de ejecución hasta que se completa la operación. Aunque son más sencillas de utilizar, pueden provocar problemas de rendimiento en aplicaciones de alta carga. Aquí se muestra un ejemplo de cómo crear un archivo utilizando una operación síncrona:

### Lectura

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("archivo.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

### Escritura

```javascript
const fs = require("fs");

try {
  fs.writeFileSync("archivo.txt", "Este es el contenido del archivo");
  console.log("Archivo escrito de manera sincrónica.");
} catch (err) {
  console.error(err);
}
```

### Eliminacion

```javascript
const fs = require("fs");

try {
  fs.unlinkSync("archivo.txt");
  console.log("Archivo eliminado de manera sincrónica.");
} catch (err) {
  console.error(err);
}
```

### Modificacion

```javascript
const fs = require("fs");

try {
  fs.appendFileSync("archivo.txt", "\nEste es un nuevo contenido para el archivo");
  console.log("Archivo modificado de manera sincrónica.");
} catch (err) {
  console.error(err);
}
```

## Operaciones CRUD Asíncronas

Las operaciones asíncronas no bloquean el hilo principal de ejecución, lo que significa que podemos realizar múltiples operaciones simultáneamente. En lugar de usar callbacks, podemos utilizar promesas o async/await para manejar el resultado de la operación. Aquí se muestra un ejemplo de cómo crear un archivo utilizando una operación asíncrona con promesas:

### Lectura

```javascript
const fs = require("fs");

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

### Escritura

```javascript
const fs = require("fs");

fs.writeFile("archivo.txt", "Este es el contenido del archivo", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Archivo escrito de manera asíncrona.");
});
```

### Eliminacion

```javascript
const fs = require("fs");

fs.unlink("archivo.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Archivo eliminado de manera asíncrona.");
});
```

### Modificacion

```javascript
const fs = require("fs");

fs.appendFile("archivo.txt", "\nEste es un nuevo contenido para el archivo", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Archivo modificado de manera asíncrona.");
});
```

## Usando promisify para las operaciones CRUD asíncronas

El módulo "util" de Node.js proporciona una función llamada "promisify" que nos permite convertir una función con callback en una función que devuelve una promesa. Esto es útil para trabajar con operaciones asíncronas utilizando async/await o promesas.

Aquí hay un ejemplo de cómo utilizar "promisify" con la función "writeFile" del módulo "fs":

```javascript
const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);

async function main() {
  try {
    await writeFile("archivo.txt", "Este es el contenido del archivo");
    console.log("El archivo ha sido creado exitosamente de manera asíncrona.");
  } catch (err) {
    console.error(err);
  }
}

main();
```

## Conclusion

En resumen, el módulo "fs" de Node.js proporciona una API para realizar operaciones CRUD en el sistema de archivos del sistema operativo. Podemos utilizar estas operaciones de manera síncrona o asíncrona, dependiendo de las necesidades de nuestra aplicación. Además, podemos utilizar "promisify" del módulo "util" para convertir funciones con callbacks en funciones que devuelven promesas, lo que facilita el trabajo con operaciones asíncronas utilizando async/await o promesas.
