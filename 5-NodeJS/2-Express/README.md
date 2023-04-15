## HTTP

HTTP (Hypertext Transfer Protocol) es un protocolo de comunicación que permite la transferencia de información en la World Wide Web. Se trata de un protocolo de nivel de aplicación que se ejecuta sobre la capa de transporte de TCP/IP.

El funcionamiento básico del protocolo HTTP se basa en el cliente-servidor, donde el cliente hace una solicitud (request) al servidor y el servidor responde (response) a dicha solicitud. Las solicitudes HTTP están compuestas por un método (GET, POST, PUT, DELETE, entre otros), una URL y una serie de cabeceras (headers) que proporcionan información adicional sobre la solicitud.

La estructura de una url es la siguiente:

```
protocolo://dominio.com:puerto/ruta?parámetros#fragmento
```

Donde:

- **protocolo**: Es el protocolo de transferencia que se utiliza, en este caso, HTTP o HTTPS.
- **dominio**: Es el nombre del servidor donde se aloja la página web a la que se accede. También puede ser una dirección IP.
- **puerto** (opcional): Es el número de puerto que se utiliza para la comunicación. Por defecto, HTTP utiliza el puerto 80 y HTTPS utiliza el puerto 443.
- **ruta**: Es la dirección del archivo o recurso que se solicita en el servidor.
- **parámetros** (opcional): Son variables que se pueden enviar al servidor para personalizar la respuesta. Se indican después del signo de interrogación "?" y se separan por "&".
- **fragmento** (opcional): Es una sección específica dentro del recurso solicitado. Se indica después del signo de numeral "#".

El servidor procesa la solicitud y responde con un mensaje HTTP que incluye un código de estado (status code) que indica si la solicitud se ha completado con éxito, y opcionalmente una serie de cabeceras y una carga útil (payload) que puede ser HTML, imágenes, archivos, entre otros.

## Modulo HTTP en NodeJS

El módulo HTTP es uno de los módulos principales en Node.js y proporciona una API para crear y manejar servidores HTTP y clientes HTTP. Con el módulo HTTP, puedes recibir y responder a peticiones HTTP en el lado del servidor, así como enviar peticiones HTTP a otros servidores en el lado del cliente. También es posible crear servidores HTTPS seguros utilizando el módulo HTTPS, que es una extensión del módulo HTTP. En resumen, el módulo HTTP es fundamental para crear aplicaciones web en Node.js.

En el siguiente ejemplo vamos a crear un servidor que responda a "http://localhost:3000/productos" con una lista de productos. En caso de intentar acceder a otra ruta se enviara el mensaje "No encontrado"

```javascript
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/productos") {
      const productos = [
        { id: 1, nombre: "Producto 1", precio: 10.0 },
        { id: 2, nombre: "Producto 2", precio: 20.0 },
        { id: 3, nombre: "Producto 3", precio: 30.0 },
      ];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(productos));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("No encontrado");
    }
  }
});

server.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000/");
});
```

## express

express es un framework web minimalista de NodeJS que simplifica la creacion de aplicaciones web y servicios web.

Para instalar express:

```
npm i express
```

Hola mundo con express:

```javascript
// index.js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("¡Hola Mundo!");
});

app.listen(3000, function () {
  console.log("La aplicación está escuchando en el puerto 3000.");
});
```

Levantamos el servidor:

```
node index.js
```

## Peticiones GET, POST, PUT y DELETE en express

```javascript
app.get("/", function (req, res) {
  res.send("¡Hola Mundo!");
});
app.post("/", function (req, res) {
  res.send("Has enviado una petición POST");
});
app.put("/", function (req, res) {
  res.send("Has enviado una petición PUT");
});
app.delete("/", function (req, res) {
  res.send("Has enviado una petición DELETE");
});
```

## Body, Headers y parametros

El **body** es una porcion de datos que se envian opcionalmente en una peticion HTTP. Es la parte que contiene los datos que el cliente esta enviando al servidor mientras que los **headers** contienen informacion adicional sobre la solicitud, como la URL.

```javascript
const express = require("express");
const app = express();

// habilitamos el envio de dastos en formato JSON en el body
app.use(express.json({limit: 50mb}))

// accedemos al body
app.post('/body', (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  res.send(`Hola ${nombre}, tienes ${edad} años`);
});

// accedemos a los headers
app.get('/headers', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(`Tu agente de usuario es: ${userAgent}`);
});

// accedemos a los parametros de una solicitud de express
app.get('/parametros/:id', (req, res) => {
  const id = req.params.id;
  res.send(`El ID es: ${id}`);
});

// accedemos a los parametros de la url como "/url?filter=valor"
app.get('/url', (req, res) => {
  const filtro = req.query.filtro;
  res.send(`El filtro es: ${filtro}`);
});

app.listen(3000, function () {
  console.log("La aplicación está escuchando en el puerto 3000.");
});
```

## Router

En Express, un Router es un objeto que permite organizar las rutas de una aplicación en módulos o subaplicaciones más pequeñas y manejables. Un Router funciona de manera similar a una aplicación de Express, pero se utiliza para definir rutas específicas que se pueden montar en una ruta raíz de una aplicación de Express.

Para definir un Router en una aplicación de Express, debes utilizar el método **express.Router()**. Por ejemplo, puedes definir un Router para manejar las rutas de autenticación de la siguiente manera:

```javascript
// /rutas/auth
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Página de inicio de sesión");
});

router.post("/login", (req, res) => {
  // Lógica de autenticación
});

router.get("/logout", (req, res) => {
  // Lógica de cierre de sesión
});

module.exports = router;
```

En este ejemplo, se define un Router que maneja las rutas de autenticación de la aplicación. Se definen tres rutas: `/login` (para mostrar la página de inicio de sesión), `/login` (para procesar la información de inicio de sesión) y `/logout` (para cerrar la sesión).

Para utilizar este Router en la aplicación principal de Express, simplemente se debe importar y montar en una ruta específica. Por ejemplo:

```javascript
const express = require("express");
const app = express();
const authRouter = require("./rutas/auth");

app.use("/auth", authRouter);
```

En este ejemplo, el Router de autenticación se monta en la ruta /auth. Por lo tanto, las rutas definidas en el Router se accederán a través de /auth/login, /auth/logout, etc.

Utilizando un Router, se puede modularizar el enrutamiento en una aplicación de Express, lo que hace que el código sea más fácil de mantener y escalar. Además, un Router también puede contener su propio middleware y funciones de manejo de errores.

## Middlewares en express

Los middlewares en Express son funciones que se ejecutan en el medio del ciclo de vida de una solicitud HTTP. Estas funciones tienen acceso al objeto de solicitud (**req**), el objeto de respuesta (**res**) y a la siguiente función de middleware (**next()**) en la pila de middleware.

Los middlewares se pueden utilizar para realizar tareas comunes en una aplicación de Express, como la validación de datos, la autenticación de usuarios, la gestión de errores, la compresión de respuestas, la gestión de cookies y mucho más.

Los middlewares se pueden definir a nivel de aplicación o de ruta utilizando las funciones **app.use()** o **router.use()**. También se pueden definir en línea junto con una función anónima. Por ejemplo:

```javascript
// Middleware a nivel de aplicación
app.use((req, res, next) => {
  console.log("Se recibió una solicitud HTTP");
  next();
});

// Middleware de ruta
router.get("/", (req, res, next) => {
  console.log("Se recibió una solicitud GET a la ruta /");
  next();
});

// Middleware en línea
app.get(
  "/",
  (req, res, next) => {
    console.log("Se recibió una solicitud GET a la raíz de la aplicación");
    next();
  },
  (req, res) => {
    res.send("Hola Mundo!");
  }
);
```

La función **next()** en cada middleware indica a Express que debe continuar ejecutando el siguiente middleware en la pila. Si un middleware necesita finalizar el ciclo de vida de la solicitud y enviar una respuesta al cliente, simplemente se puede omitir la llamada a **next()** y enviar una respuesta directamente al cliente. Por ejemplo:

```javascript
// Middleware de autenticación
router.use((req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    return res.status(401).send("No autorizado");
  }
});
```
