# Listas en HTML

## Como funcionan las listas

Las listas son una herramienta mas para organizar la visualizacion de manera ordenada y estructurada, aunque parezca algo simple(y lo son),
tambien son extremadamente utiles y necesarias en muchos casos

## Tipos de lista

Segun la etiqueta que utilicemos podemos generar 3 tipos de listas distintos, los dos tipos mas usados que son listas ordenadas y desordenadas;
y por otro lado las listas de definiciones

### Lista ordenada

Este tipo de lista mostrara todos sus items ordenados numericamente del 1 hacia adelante, utliza 2 etiquetas:

- <ol></ol>: Etiqueta padre que engloba todos los elementos que van dentro de la lista
- <li></li>: Etiqueta que representa cada elemento de la lista

Ejemplo

```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
```

### Lista desordenada

Estas listas en cambio, no tienen ningun criterio de ordenamiento, simplemente muestran los items com un ".", utiliza 2 etiquetas:

- <ul></ul>: Etiqueta padre que engloba todos los elementos dentro de la lista
- <li></li>: Etioqueta que representa cada elemento de la lista

Ejemplo

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

### Lista de definiciones

Este tipo de lista es el menos usado pero sirve para representar glosarios principalmente, utiliza 3 etiquetas:

- <dl></dl>: Etiqueta padre que engloba todos los elementos que van dentro de la lista
- <dt></dt>: Etiqueta que representa el titulo o termino a describir
- <dd></dd>: Etiqueta que va debajo de <dt></dt> añadiendo una breve descripcion al termino

## Tarea

Crear un archivo con las mismas caracteristicas del punto anterior, agregando listas de:

- Supervisores
- Coordinadore
- Alumnos
  Ademas hacer una lista con los ejercicios realizados hasta ahora,agregando uuna breve descripcion de cada uno, ejemplo:

- Variables
  - Ejercicios para conocer los distintos tipos de variables que tiene JS y como funcionan
- Operaciones Algebraicas y logicas
  - Ejercicios para familiarizarse con las distintas operacioens que nos brinda JS
