# Esctructuras de control

Las estructuras de control se utilizan para decidir cómo seguirá el flujo del programa en base a condiciones lógicas.

## If, If Else

Esta estructura nos permite decidir si ejecutaremos cierto código si se cumple una determinada condición lógica. Podemos agregarle la sentencia else para ejecutar otra porción de código si la condición resulta ser falsa.

```javascript
// if normal
if (true) {
  console.log("La condición es verdadera");
}

// if, else
if (false) {
  console.log("La condición es verdadera");
} else {
  console.log("la condición es falsa");
}

// podemos tener varios else anidados con condiciones diferentes
if (false) {
  console.log("La primera condición es verdadera");
} else if (false) {
  console.log("la segunda condición es verdadera");
} else {
  console.log("ninguna condición es verdadera");
}
```

## While

Tanto el while como el for se utilizan para la repetición, es decir ejecutar un código una x cantidad de veces. la estructura while particularmente ejecutará el código mientras la condición sea verdadera.

```javascript
let x = 10;
while (x > 0) {
  // este bucle se repetirá 10 veces
  console.log(x);
  x--;
}
```

## For

De forma similar al while, el for sirve para iterar una x cantidad de veces sobre cierta cantidad de instrucciones. La diferencia radica en que dentro del for podemos definir un estado inicial y una instrucción que se ejecutará por cada iteración.

```javascript
for (let x = 10; x > 0; x--) {
  // condición inicial: x = 10
  // instrucción para cada ciclo de bucle: x = x - 1
  console.log(x);
}
```
