# Manejo avanzado de arreglos

Previemante de describio que eran los arreglos y una forma de iterarlos mas elegante que un simple for. Luego de ver como funcionan las funciones en JS, podemos ampliar mas el conocimientos sobre arreglos.
Los arreglos son un tipo de estructura MUY usada en JS, por eso cuentan con muchos metodos para realizar operaciones con ellos.

## forEach

El metodo forEach nos permite iterar un arreglo. Recibe como parametro una funcion que se ejecutara por cada elemento del arreglo. Esta funcion callback recibe como parametro:

1. el elemento actual
2. el indice del elemento actual
3. el arreglo completo

El metodo forEach NO muta el arreglo original

```javascript
[1, 2, 3].forEach((elemento, indice, arreglo) => {
  console.log(elemento, indice, arreglo);
});
```

## map

El metodo map se utiliza para aplicarle un cambio a todos los elementos del arreglo, recibe la misma funcion que el metodo forEach(). La unica diferencia es que el valor retornado de la funcion sera el nuevo valor de ese elemento.

```javascript
// [2, 4, 6]
const arr = [1, 2, 3].map((e, i, arr) => e * 2);
```

## filter

El metodo filter filtra un arreglo, dejando solo los elementos cuya funcion retorne true. La funcion callback recibe los mismos parametros que forEach() y map().

```javascript
// [2, 4]
const arr = [1, 2, 3, 4, 5].filter((e, i, arr) => e % 2 == 0);
```

## reduce

El metodo reduce se utiliza para reducir todo el arreglo a un valor basandose en la logica de la funcion que se le pasa como argumento. Esta funcion recibe 2 parametros:

1. la funcion callback que se ejecutara, retornara nuevo valor de la variable acumuladora. Esta recibe a su vez dos argumentos:
   - la variable que acumula el valor totol
   - el elemento actual del arreglo
2. El valor inicial de la variable acumuladora

```javascript
// 6
const val = [1,2,3].reduce((acumulador, e) => acumulador + e. )
```

## sort

El metodo sort permite ordenar el arreglo. Recibe una funcion callback que a su vez recibe como parametro 2 elementos de arreglo para compararlos, el orden dependera de si la fucnion retorna 1 o -1

```javascript
// [1,2,3]
const arr1 = [2, 1, 3].sort((e1, e2) => {
  if (e1 > e2) return -1;
  return 1;
});

// [3,2,1]
const arr1 = [2, 1, 3].sort((e1, e2) => {
  if (e1 > e2) return 1;
  return -1;
});
```

## find

El metodo find devuelve el primer elemento del arreglo cuya funcion de callback retorne true. La funcion que recibe es la misma que filter, map,etc

```javascript
// "juancito"
["pepe", "juancito", "roberto"].find((e, i, arr) => e.startsWith("juan"));
```

## some

El metodo some funcina igual que find, solo que devuelve true si algun elemento cumple con la condicion.

```javascript
// true
["pepe", "juancito", "roberto"].find((e, i, arr) => e.startsWith("juan"));

// false
["pepe", "juancito", "roberto"].find((e, i, arr) => e.startsWith("hola"));
```
