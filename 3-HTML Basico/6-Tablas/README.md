# Tablas en HTML

## Etiquetas para las Tablas

Las tablas en HTML son una herramienta mas, como las listas, para organizar y mostrar informacion de manera mas ordenada, en este caso ordenadola en filas y columnas

Para crear una tabla se necesita de uan combinacion de etiquetas, un ejemplo de tabla seria el siguiente:

```html
<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
      <td>Dato 3</td>
    </tr>
    <tr>
      <td>Dato 4</td>
      <td>Dato 5</td>
      <td>Dato 6</td>
    </tr>
  </tbody>
</table>
```

Donde:

- <table></table>: Es la etiqueta que engloba a toda la tabla
- <thead></thead>: Es la etiqueta que representa todo el encabezado de la tabla
- <tr></tr>      : Es la etiqueta que engloba todos los elementos de una fila
- <th></th>      : Representa un elemento dentro de la fila de ENCABEZADOS
- <tbody></tbody>: Es la etiqueta que engloba todo el cuerpo de la tabla
- <td></td>      : Represneta un elemento dentro de la fila del CUERPO

## Tarea

Crear un archivo con las mismas caracteristicas del punto anterior, agregando una tabla que contenga:

- Dia de la clase
- Horas que estuvieron en la clase
- Breve descripcion de lo hecho en la clase

Pueden utilizar como referencia el siguente [excel](https://docs.google.com/spreadsheets/d/1IvrG0LOUyKkrOMHnM4JIH9G0ug3lK4PE/edit?usp=sharing&ouid=115716158911216165456&rtpof=true&sd=true)
