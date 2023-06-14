# Bordes y Texto

Asi como antes vimos que hay muchas formas de definir un fondo a una etiqueta, lo mismo pasa con el estilo de bordes y texto.
Podemos definir bordes simples y texto sin formato hasta bordes totalmente customizados y textos con formatos unicos

## Distintas propiedades de los bordes

Existen muchas propiedades para definir los bordes de una etiqueta, aca vamos a ver los mas simples

```css
div {
  border-style: dotted; /* Todo el borde punteado */
}
p {
  border-style: solid; /* Borde continuo, solido */
}

span {
  border-style: hidden; /* Borde oculto, no es lo mismo que sin borde */
}
```

Tambien podemos definir un estilo de borde distinto en cada lado, asi:

```css
div {
  border-style: dotted dashed solid double; /* El orden de los bordes es: Arriba,Derecha,Abajo,Izquierda */
}
```

Podemos definir un color y un tamaño:

```css
div {
  border-width: 10px; /* Todos los bordes son de 10px */
  border-color: red;
}
```

### Nota

Hay muchas mas formas de aplicar estilos a los bordes, recomendaria que investigen un poco y busquen formas mas eficientes de aplicar todos estos estilos

## Texto

Al igual que con los bordes, los textos tienen muchisimas propiedades, algunas de ellas las veremos a continuacion

```css
div {
  color: red; /* Asgina un color al texto */
  text-align: center; /* Alinea todo el texto en el centro */
  text-decoration-line: underline; /* Añade una linea debajo del texto */
  text-transform: uppercase; /* Pone todo el texto en mayuscula */

  font-family: "Times New Roman", Times, serif;
  /* Se asignan 3 tipos de fuentes al texto, si una letra no tiene estilo para "Times New Roman" se intenta asignar la siguiente y asi sucesivamente */
}
```

### Nota

Hay muchas mas formas de aplicar estilos a los textos, recomendaria que investigen un poco y busquen formas mas eficientes de aplicar todos estos estilos

# Tarea

Crear un archivo HTML con etiquetas varias y asignarle a cada los bordes y textos mas variados que se les puedan ocurrir
