# Operadores aritmetos y logicos

## Expresion vs Declaracion

Antes de comenzar con operadores es importante entender la diferencia entre **Expresión** y **Declaración**. Una expresión es un fragmento de código que produce un valor, mientras que una declaración es un fragmento de código que no produce ningún valor.

```javascript
 // Expresión
  (2 + 2);
  // Declaración
  const x;
```

## Operadores aritmeticos

Los operadores pueden ser unarios o binarios (también existe un operador ternario especial).Los operadores unarios necesitan de un solo operando, ya sea antes o después del operador.Los operadores binarios necesitan de dos operandos, unos antes del operador y otro después.

```javascript
// Operación Binaria
2 + 2;
// Operacion Unario
x++;
```

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Javascript contiene los siguientes operadores aritméticos:

- **' + '**: suma tradicional entre dos operandos
- **' - '**: resta tradicional entre dos operandos
- **' \* '**: multiplicación tradicional entre dos operandos
- **‘ / ’**: división tradicional entre dos operandos
- **‘ % ’**: Residuo.Devuelve el resto entero de dividir dos operandos
- **‘ ++ ’**: Incremento. Operador unario que agrega uno a su operando, si se coloca antes de la variable (++x), devuelve el valor de su operando después de agregar uno; si se usa después de la variable(x++),devuelve el valor de su operando antes de agregar uno
- **‘ -- ’**: Decremento. Operador unario que resta uno a su operando, el valor de retorno varía de igual manera que en Incremento

```javascript
2 + 2 // 4

2 - 2 // 0

4 / 2 // 2

2 * 4 // 8

8 % 2 // 0

9 % 2 // 1

1++ // 2

2-- // 1
```

## Operadores de Comparacion

Los operadores de comparación son aquellos operadores que se utilizan para expresiones lógicas. A continuación se muestran los operadores de comparación más básicos:

- **‘ == ’**: compara si dos números son iguales, no diferencia entre String o Number
- **‘ === ’**: compara si dos números son iguales, diferencia entre String y Number
- **‘ != ’**: compara si dos números son distintos, no diferencia entre String o Number
- **‘ !== '**: compara si dos números son distintos, diferencia entre String y Number
- **‘ > ’**: compara si un número es menor a otro
- **‘ < ’**: compara si un número es mayor a otro
- **‘ >= ’** compara si un número es mayor o igual a otro
- **‘ <= ’**: compara si un número es menor o igual a otro

Todas estas expresiones retornan un valor Booleano.

```javascript
// igual a (sin importar tipo)
5 == 5; // true
5 == "5"; // true
5 == 2; // false

// igual a (sí importa el tipo)
5 === 5; // true
5 === "5"; // false

// distinto a
5 !== 3; // true

// mayor a, menor a
5 > 3; // false
5 < 10; // true

// mayor o igual a, menor o igual a
5 >= 5; // true
5 >= 6; // false
5 <= 5; // true
```

## Operadores Logicos

Los operadores lógicos son aquellos que se utilizan para realizar operaciones con valores Booleanos. Son el equivalente a las compuertas lógicas:

- **‘ && ’**: equivalente a la compuerta AND
- **‘ || ’**: equivalente a la compuerta OR
- **‘ ! ’**: equivalente a la compuerta NOT

```javascript
// AND
true && true; // true
true && false; // false
false || false; // false

// OR
true || true; // true
true || false; // true
false || false; // false

// NOT
!true; // false
!false; // true
```

### Short Circuit Evaluation

En JavaScript las expresiones lógicas son evaluadas de izquierda a derecha, esto quiere decir por ejemplo que si usamos el operador AND(&&), al encontrar una sola expresión falsa dejará de evaluar las que siguen. Por el contrario la OR(||) seguirá buscando hasta encontrar la primera expresión verdadera.

Esta funcionalidad es bastante útil si tenemos en cuenta lo siguiente: en JavaScript distintos valores pueden ser evaluados por operadores lógicos. Por dar un ejemplo el número 0, la cadena vacía ‘’ o el valor undefined son tomados como una expresión falsa, mientras que cualquier otro número o cadena que no esté vacía son tomados como verdaderos. La forma de sacar provecho de este concepto es la siguiente:

```javascript
const x = y || "Otro valor";
```

Como se puede observar si la variable **y** no está declarada (o es false), la variable **x** tomará un valor predeterminado.
