# Grid

Grid es una tecnica de diseño con cajas flexibles que permite crear diseños flexibles y adaptables.
Se pueden organizar elementos en una una dimension(horizontal o vertical), controlar su alineacion, distribucion y reorganizacion en funcion del espacio disponible.

Flexbox es mas util para crear barras de navegacion, listas de elementos alineadas o diseños con varias columnas con tamaños distintos

Ejemplo:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

La forma de utilizar flex es tener una caja contenedora con la clase "flex-container" y todo lo que se quiera diseñar teniendo ne cuenta el flex, debe ir dentro de esa caja

## Tarea

Crea una barra de navegación horizontal utilizando Flexbox. Debe tener las siguientes características:

- Un contenedor principal que utilice Flexbox para alinear los elementos de navegación en una fila.
- Cada elemento de navegación debe tener un tamaño flexible para que se ajusten automáticamente al ancho del contenedor.
- Agrega un espacio entre los elementos de navegación para separarlos visualmente.
- Hay que asegurarse de que los elementos de navegación se ajusten correctamente cuando se cambie el tamaño de la ventana del navegador.
