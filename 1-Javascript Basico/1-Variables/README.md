# Variables en JS

## ¿Que es una variable?

Una variable es donde se guardan y se recuperan datos que se utilizan en un programa, los diferentes usos para una variable son:

- Guardar datos y estados
- Asignar valores de una variable a otra
- Representar valores dentro de una expresión matemática
- Mostrar valores en pantalla

En javascript tenemos 3 formas de declarar variables:

- **let**: permite declarar una variable que puede cambiar su valor mas adelante
- **const**: permite declarar una variable que no cambiara de valor mas adelante
- **var**: forma de declarar variables en JS hasta 2015, fue reemplazada por **const** y **let**

Ejemplo

```javascript
// x no pude ser reasignada
const x = 5;
// y si puede ser reasignada
let y = 4;
```

## Tipos de datos en JS

Un tipo de dato es un atributo de los datos que le indica a la computadora (y/o al programador) sobre la clase de datos que va a manejar.
Existen muchos tipos de datos en programación (incluso se pueden crear tipos de datos propios) pero se pueden dividir en dos grandes grupos, tipos de datos primitivos y complejos.

Los tipos de datos primitivos son:

- **Number**: representa un número entero o flotante
- **String**: representa una lista de caracteres
- **Boolean**: Representa valores lógicos: true(verdadero) o false(falso).
- **Undefined**: Tipo asignado automáticamente a las variables que solo han sido declaradas
- **Null**: Tipo de dato primitivo especial que representa un valor inexistente o invalido
- **NaN(Not A Number)**: Tipo de dato que representa que la variable no es un número.

Los tipos de datos complejos son un conjunto de tipos de datos primitivos, se los conoce como estructuras de datos, se profundizará en este tema más adelante.
Al ser JavaScript un lenguaje dinámico no es necesario especificar el tipo de dato de las variables, ya que este puede modificarse a lo largo del programa,esto puede llegar a generar errores si no se presta atención al momento de modificar el valor de una variable.
Si se tratase de un lenguaje estático se tendría que especificar el tipo de dato en cada variable

```javascript
// Number
let x = 7;
let y = 5.5;
// Boolean
let bool = true;
// String
let str = "Soy un String :D";
// Undefined
let z;

// cambiamos el valor de x :O
x = "Ahora soy un String";
```

Nótese que a diferencia de otros lenguajes JavaScript no comete un error cuando dejamos una variable sin declarar, esto debe tenerse en consideración a la hora de trabajar con este lenguaje
