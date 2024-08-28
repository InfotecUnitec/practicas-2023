# Formularios e Inputs

## Formularios e Inputs en HTML

La principal funcionalidad de los formulario es recopilar cierta informacion relevante para nosotros y utilizarla de alguna manera,
un formulario puede ser desde un login hasta un examen virtual

Un formulario por si solo no sirve de mucho, pero acompañado por JS, podemos obtener su informacion y tratarla como querramos,
por ahora vamos a centrarnos en la creacion de estos formularios

Se utilizan 3 etiquetas principales para la creacion de formularios:

- ```<form></form>```: Etiqueta padre que engloba todo lo que vaya dentro del formulario
- ```<label></label>```: Etiqueta para darle un titulo a un input
- ```<input>``` : Etiqueta principal con muchos tipos distintos para la recopilacion de informacion

Ejemplo

```html
<form action="#">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <input type="submit" value="Enviar" />
</form>
```

Como dije antes los inputs tienen muchos tipos, desde el mas simple que es "text"(texto plano), hasta un tipo "file" que sirve para insertar un archivo.
Todos los tipos de encuentran [aqui](https://developer.mozilla.org/es/docs/Web/HTML/Element/input)

## Tarea

Crear un nuevo archivo HTML con un formulario para agregar toda su informacio personal que crean relevante (como minimo lo mismo que le pidieron para entrar a UNITEC)
