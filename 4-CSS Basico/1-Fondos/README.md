# Bienvenidos a CSS

Bienvenidos al maravilloso mundo de las Hojas de Estilo en Cascada (Cascading Style Sheets), primero que nada sepan que **NO ES UN LENGUAJE DE PROGRAMACION**, es un lenguaje de estilos que se utiliza para describir la presentacion de documentos HTML.

## ¿A que podemos aplicar estilos?

Basicamente a casi todo, cualquier etiqueta que entienda el atributo "class" se le pueden aplicar estilos y no solo eso sino que se le pueden aplicar estilos a la etiqueta misma de la siguiente manera:

```css
div {
  background-color: red;
}
```

## Como aplicar estilos

Tenemos 3 formas de aplicar estilo a una etiqueta:

- Utilizando literalmente el nombre de la etiqueta (como vimos arriba)
- Utilizando su id (propiedad de las etiquetas)
- Creando una clase y asignandosela desde la propiedad "class" de la etiqueta
  Ejemplos:

```css
div {
  background-color: red;
}
#ID {
  background-image: url("https://static.vecteezy.com/system/resources/previews/018/931/497/original/easter-egg-icon-png.png");
}
.clase {
  background: rgba(0, 128, 0, 0.3);
  background-repeat: repeat-x;
}
```

## Asignar el archivo CSS al HTML

Hacer esto es tan simple como agregar una etiqueta especial. Dentro de la etiqueta <head>, tenemos que agregar una etiqueta <link> con la ruta al archivo CSS, ejemplo:

```html
<link rel="stylesheet" href="ruta/al/archivo/estilos.css" />
```

# Tarea

Crear un archivo HTML con etiquetas varias y asignarle a cada una un fondo distinto (utilicen distintas propiedades de fondo)
