# Esctructuras de datos

Previamente se mencionó que además de los tipos primitivos de datos existen tipos más complejos, en esta sección ampliaremos más el tema presentando estos tipos de datos complejos.

## Arreglos

Los arreglos nos permiten almacenar distintos tipos de datos en una lista indexada. A cada elemento del arreglo le corresponde una única posición y con esta misma podremos acceder a los datos que este contiene. La longitud de los arreglos en javascript es variable

```javascript
// creamos el arreglo vacío o con elementos
const arr = [];
const arrLleno = [1, "pepe", true];

// visualizamos el arreglo completo
console.log(arr, arrLleno);

// visualizamos algún elemento puntual
console.log(arrLleno[1]); // 'pepe'

// agregamos un elemento al arreglo
arr.push("mi primer elemento");

// vemos la longitud del elemento
console.log(arr.length);

// eliminamos un elemento del arreglo en la posición 1
arrLleno.splice(1, 1);
console.log(arrLleno);

// nota: el método splice(pos,cant) elimina cant cantidad de elementos a partir de la posición pos
```

## Objetos

Los objetos son estructuras que agrupan distintos tipos de datos asignándoles un nombre dentro del objeto en cuestión. Los objetos no son estructuras indexadas como los arreglos, para acceder a sus datos debemos utilizar el nombre que le asignamos al crear el objeto.

```javascript
const obj = {
  nombre: "juan",
  apellido: "perez",
  edad: 40,
};

// distintas formas de acceder a los atributos de los objetos
console.log(obj.nombre, obj.apellido, obj["edad"]);

// agregamos propiedades al objeto
obj.dni = "43521062";

// visualizamos todo el objeto
console.log(obj);
```

## Desestructuracion

Previamente vimos cómo construir estructuras que agrupan varios tipos de datos, pero suele ser muy común que recibamos grandes estructuras y queramos hacer ingeniería inversa para transformarla en pequeñas estructuras más sencillas de analizar. De eso trata básicamente la desestructuración: transformar una estructura compleja en otras más sencillas.

```javascript
const arreglo = [1, 2, 3];

// desestructuración de arreglo
const [a, b, c] = arreglo;

// desarmamos un arreglo
const arregloSpread = [a, ...arreglo];

console.log(a, b, c, arregloSpread);

const objeto = {
  nombre: "pepe",
  apellido: "perez",
};

// la desestructuración de objetos funciona de forma similar a la de los arreglos
// la diferencia radica en que debemos usar el nombre verdadero del atributo del objeto
// y si queremos cambiar el nombre de la variable final debemos utilizar ":"
const { nombre: nom, apellido } = objeto;

console.log(nom, apellido);
```

## Iteracion sobre estructuras de datos

Una de las razones por las que solemos utilizar estructuras de datos es para agrupar datos que estén relacionados de alguna manera(por ejemplo información de los usuarios), y al tenerlos todos juntos podamos efectuar operaciones sobre estos datos. Cuando tenemos volúmenes muy grandes de datos no es conveniente resolver todo manualmente. En cambio, podemos definir una operación que se ejecute para cada elemento de una determinada estructura. Si bien podemos recorrer una estructura utilizando un for clasico, javascript nos habilita métodos más refinados para ejecutar este tipo de acciones.

```javascript
// forEach
// elemento: elemento actual del arreglo
// i: posición correspondiente al elemento dentro del arreglo
// arr: arreglo entero
arreglo.forEach((elemento, i, arr) => {
  console.log(elemento, i, arr);
});

// Object.entries(objeto) devuelve un arreglo con arreglos agrupando clave y valor
Object.entries(objeto).forEach((elemento, i, arr) => {
  console.log(elemento);
});
```
