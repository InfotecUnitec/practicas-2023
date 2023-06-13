# Animaciones en CSS

Las animaciones CSS permiten animar la transición entre un estilo CSS y otro. Las animaciones constan de dos componentes: un estilo que describe la animación CSS y un conjunto de fotogramas que indican su estado inicial y final, así como posibles puntos intermedios en la misma.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

Tambien podemos utilizar porcentajes para personalizar aun mas nuestro fotograma

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  0% {
    margin-left: 100%;
    width: 300%;
  }
  50% {
    margin-left: 50%;
    width: 200%;
  }
  100% {
    margin-left: 0%;
    width: 100%;
  }
}
```

Ejercicio: Crear una animacion infinita de un cuadrado que gira y varia su tamaño
