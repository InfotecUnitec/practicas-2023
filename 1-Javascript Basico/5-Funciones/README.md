# Funciones

Podemos comenzar definiendo una función matemática como una caja negra que recibe una o más entradas y devuelve un único valor para esa combinación de entradas. En javascript definimos que una función es una agrupación de instrucciones que recibe una o varias entradas y devuelve una salida donde hay una relación obvia entre entrada y salida. Y definimos a un procedimiento como una agrupación de instrucciones que no recibe parámetros de entrada. Para utilizar funciones o procedimientos en javascript utilizamos la siguiente sintaxis:

```javascript
// varias formas de declarar una función/procedimiento
const miFuncion = function () {
  // cuerpo
};

function miFuncion2() {
  // cuerpo
}

// procedimiento
const procedimiento = function () {
  console.log("ejecuto esta linea de codigo pero no devuelvo nada");
};

// esto si bien está permitido, no es correcto
const suma = 2 + procedimiento;
console.log(suma);

// funcion
const función = function (parametro1, parametro2) {
  return parametro1 + parametro2;
};

// esto si es correcto
console.log(función(1, 4));
```

## Fat Arrow Functions

Las fat arrow function son una forma abreviada de escribir funciones. Se utilizan mayormente cuando tenemos que enviar funciones como parámetros a otras funciones. Si la función consta de una sola línea se retorna implícitamente.

```javascript
// función de una sola línea
const fatArrow = (par1, par2) => par1 + par2;

// función de más de una sola línea
const fatArrow2 = (par1, par2) => {
  par2 = par2 * 2;
  return par1 + par2;
};

console.log(fatArrow(1, 4), fatArrow2(1, 4));
```

## High order functions y callbacks functions

Existen 2 tipos de funciones: las **first class functions**, que son funciones con valores simples (las presentadas previamente en esta guía) y las **high order functions**, que son funciones que reciben como parámetros o devuelven otras funciones, o ambas. Este tipo de funciones aparecen con mucha frecuencia en Javascript para modularizar tareas o implementar patrones entre otras cosas, por eso es importante comprender su funcionamiento. Estas funciones suelen utilizarse junto con las llamadas **callback functions**, que son funciones que se pasan a otras funciones como argumento, y luego se invocan dentro de la función externa para completar alguna rutina o acción. Un claro ejemplo del uso de estas son los métodos para manejar eventos de elementos HTML.

```javascript
// la función addEventListener pasa como argumento el objeto del evento que se produjo
const callback = (e) => {
  console.log("PRESIONE EL BOTÓN");
};

// función de orden superior
// parametro 1: tipo de evento
// parámetro 2: función que se ejecuta cuando se produce dicho evento
boton.addEventListener("click", callback);
```
