# Javascript asincronico

## Codigo asincronico

Hasta este punto de la guía todos los programas y ejemplos que fueron vistos se ejecutaron de manera sincrónica, es decir hasta que no se ejecuta la instrucción **I** no se ejecutará la instrucción **I + 1**. Pero en la vida real solemos tratar con eventos que no tienen un tiempo fijo de respuesta, por lo que este tipo de programa no es suficiente para tratar con estos eventos. Supongamos que queremos hacer una consulta a un servidor y este se encuentra caído o tarda mucho en responder, si nuestro código se ejecuta de manera sincrónica esto significa que el usuario deberá esperar a que la aplicación responda sin poder hacer nada mientras tanto. Lo cual resultará en una pésima experiencia de usuario (y no queremos eso). Por lo que utilizaremos lo que denominamos “código asincrónico”. El código asincrónico es una porción de programa que se ejecuta en “paralelo” al resto del programa (nótese que “paralelo” está entre comillas, esto se debe a que no es preciso utilizar esa palabra debido a que no funciona exactamente asi detras de escena, pero no corresponde a esta guia ahondar tan profundo en el tema), esto quiere decir que el código asincrónico se ejecutará en segundo plano sin detener la ejecución de programa principal. Para la ejecución del código asincrónico utilizamos las llamadas **Promises**.

## Promesas

Una **promesa** es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Podemos hacer una analogía con el mundo real muy sencilla, supongamos que le decimos a nuestro amigo que vaya al kiosko a comprarnos un sanguche, mientras él va a comprar el sanguche(código asincrónico) nosotros podemos seguir haciendo tareas(código sincrónico) mientras esperamos que vuelva nuestro amigo con la respuesta, que puede ser exitosa o fallida. Ahora veremos un ejemplo práctico de cómo crear promesas(aunque en la realidad es mucho más común consumir promesas que crearlas)

```javascript
// creamos una promesa que tiene un 50% de probabilidades de ser exitosa o fallida
const miPromesa = new Promise(function (resolve, reject) {
  if (Math.random > 0.5) resolve("mayor a 0.5");
  else reject("menor o igual a 0.5");
});

// consumimos la promesa
console.log("Se ejecuta 1ro");
miPromesa.then((res) => console.log(res));
console.log("Se ejecuta 2do");
```

Notemos el orden en el que se ejecutan las instrucciones, se puede apreciar el tipo de ejecución asincrónica de las Promesas.

## API

Como desarrolladores de software seguramente hayan escuchado el concepto de API(Application Programing Interface). Una API es básicamente un fragmento de código que es utilizado por otro fragmento de código. Es muy común consumir APIs cuando queremos consultar ciertos datos, o utilizar ciertos métodos externos a nuestra aplicación. Existen miles de APIs diferentes para distintos propósitos. A continuación se muestran links a algunas APIs curiosas:

- https://www.thecocktaildb.com/
- https://www.fruityvice.com/#3

## JSON

JavaScript Object Notation **(JSON)** es un formato de intercambio de datos. Todas las APIs que consumimos devuelven sus datos en este formato debido a que es un formato de fácil lectura. Es prácticamente igual a como fueron declarados los objetos en las secciones previas, con la única diferencia que los nombres de las propiedades están entre comillas. Ejemplo de un archivo .json:

```json
{
  "data": 10,
  "números": [1, 2, 3],
  "subObj": {
    "var": "variable"
  }
}
```

## Consumir una API con fetch

Ya vimos que es una API y que son los JSON así que solo resta ver cómo podemos consumirlas para utilizarlas. Existen varias formas de consumirlas, ahora veremos la primera forma (que es la que se utilizaba antes de la ES6).

```javascript
const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(URL).then((res) => console.log(res));
```

## Async - Await

La forma de consumir promesas con fetch tiene un inconveniente que no se presenta cuando tratamos la información de forma rápida que puede llegar a molestarnos si tenemos que encadenar varias operaciones sobre los datos. Para ver este inconveniente de forma gráfica, vamos a volver a consumir la misma API con fetch pero esta vez transformaremos los datos

```javascript
const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(URL).then((res) => res.json().then((data) => console.log(data)));
```

Si bien seguimos entendiendo claramente el código, ¿qué pasaría si tuviéramos 5 pasos más o 10?. Este inconveniente se conoce como “callback hell” debido a que tendremos muchísimas funciones anidadas lo cual dificulta que nuestro código sea autodocumentado. Como respuesta a este problema surgió en la ES6 las funciones **async**. La idea de estas funciones es ejecutar código asincrónico de forma similar al sincronico.

```javascript
const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const funcionAsincronica = async function () {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

console.log("Hola :D");
funcionAsincronica();
console.log("Ahora llega la respuesta...");
```

Como se puede observar aparecen 2 palabras clave: **async** y **await**. Async nos indica que la función se ejecutará de forma asincrónica, mientras que await bloquea el flujo de las instrucciones hasta que se resuelva la promesa por la que está esperando y retorna el resultado de la promesa.

## Excepciones

Una **Excepcion** representa la presencia de una condicion anormal que requiere tecnicas operables especiales.
En terminos de programacion una excepcion es una porcion de codigo que rompe el fujo normal del codigo. Por ejemplo en lenguajes fuertemente tipados se podria producir una excepcion cuando intentamos asignarle a una variable un tipo que no le corresponden.

Algunos ejemplos de excepciones

```javascript
// RangeError: cuando un numero esta fuera de su rango de valores
const arr = [];
arr.length = 99 ** 99; // 99^99

// TypeError: cuando una operacion se realiza con los datos incorrectors
const num = 100;
num.toUpperCase(); // metodo de strings
```

## Manejo de excepciones

JavaScript cuenta con una estructura de control para manejar estas Excepcines. Sirven tanto para código sincrónico como asincrónico, pero se utilizan mayormente con asincrónico. A continuación cometeremos un error a propósito para ver su funcionamiento(Introducimos mal la URL “..Awww..”):

```javascript
const URL =
  "https://Awww.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const funcionAsincronica = async function () {
  try {
    // intentamos ejecutar este código
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // en caso de que suceda un error lo informamos en pantalla sin detener el programa
    console.log(err);
  } finally {
    // esto se ejecuta al final de la consulta sin importar el resultado
    console.log("Termino la consulta");
  }
  console.log(
    "Si no tuviéramos el bloque try-catch no veríamos este mensaje..."
  );
};

fetch(URL)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Termino la consulta");
  });

console.log("Hola :D");
funcionAsincronica();
console.log("Ahora llega la respuesta...");
```

Es muy comun que utilicemos el manejo de excepciones cuando trabajamos con Promesas, debido a que estas pueden tener un estado fallido que dispara una excepcion.
