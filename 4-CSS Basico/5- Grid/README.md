# Grid

Grid es una tecnica de diseño con cuadriculas que permite organizar y controlar el deiseño de las paginas web en filas y columnas.
Se pueden definir areas y divisiones en una cuadricula,controlar el tamaño y la posicion de los elementos dentro de cada area.

Hay que utilizar grid cuando el diseño es complejo y se utilizan estructuras similares a mosaicos o grillas.

Ejemplo:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

La forma de utilizar grid es tener una caja contenedora con la clase "grid-container" y todo lo que se quiera diseñar teniendo ne cuenta el grid, debe ir dentro de esa caja

## Tarea

Crea una galería de imágenes con CSS Grid. Debe tener las siguientes características:

- Un contenedor principal que utilice CSS Grid para organizar las imágenes en una cuadrícula.
- Las imágenes deben tener un tamaño fijo y deben ajustarse automáticamente dentro de los espacios de la cuadrícula.
- Hay que asegurarse de que la cuadrícula se adapte correctamente cuando se cambie el tamaño de la ventana del navegador.
