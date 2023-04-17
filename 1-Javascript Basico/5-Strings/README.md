# Strings

Los strings son un tipo de dato mas en Javascript, pero no por eso son sencillos o simples.
Aca veremos diferentes metodos y funcionalidades que se les puede dar a los strings

```javascript
// creamos un string primitivo
const str = "Pepe";
// creamos un Objeto de tipo String
const objStr = new String("Un objeto String");

//Algunas funciones simples sobre Strings

//Los strings realmente son arreglos de caracteres, asi que podemos obtener esos caracteres individualmente
//Obtener un caracter
"perro".charAt(1); // devuelve e
//Otra forma
"perro"[1]; // devuele e

//Se pueden utilizar operaciones algebraicas y logicas sobre los strings
"perro" + "gato"; //Devuelve perrogato
"perro" === "gato"; // Devuelve false
"a" < "b"; // Devuelve true

//Hay metodos que solo pueden utilizarse en strings

"perro".toUpperCase(); // Devuelve "PERRO"
```

Existen muchos mas metodos y formas de utilizar Strings, estos son solo los mas simples
