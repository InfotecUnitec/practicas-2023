## INFOTEC Market

Ejercicio: INFOTEC Market
En este ejercicio vamos a modelar un sistema que brinde servicios para dar de alta, modificar y dar de baja productos. Ademas de permitirnos modelar un sistema de carrito donde podremos agregar distintos productos y realizar una compra.

## Endpoints

### `/productos`

### **GET**

Lista todos los productos

**Http Status**

```
200
```

**Response**

```JSON
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "mandarina",
      "price": 100,
    },
    {
      "id": 2,
      "name": "banana",
      "price": 200,
    },
    {
      "id": 1,
      "name": "manzana",
      "price": 50,
    }
  ]
}
```

### **POST**

Crea un producto con los datos enviados en el payload

**Http Status**

```
201
```

**Payload**

```JSON
{
  "name": "pera",
  "price": 40
}
```

**Response**

```JSON
{
  "status": "success",
  "data": {
    "id": 4,
    "name": "pera",
    "price": 40
  }
}
```

### **PUT**

Error

**Http Status**

```
405
```

**Response**

```JSON
{
  "status": "fail",
  "message": "method not allowed"
}
```

### **DELETE**

Error

**Http Status**

```
405
```

**Response**

```JSON
{
  "status": "fail",
  "message": "method not allowed"
}
```

### `/productos/{id}`

### **GET**

Retorna el producto con la id solicitada

**Http Status**

```
200 o 400
```

**Response**

```JSON
// /productos/1 y existe el producto con id = 1
// http code: 200
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "mandarina",
    "price": 100
  }
}

// /productos/200 y no existe el producto con id = 200
// http code: 400
{
  "status": "fail",
  "message": "producto with id 200 does not exist"
}
```

### **POST**

Error

**Http Status**

```
405
```

**Response**

```JSON
{
  "status": "fail",
  "message": "method not allowed"
}
```

### **PUT**

Modifica los datos del producto con la id solicitada
**Http Status**

```
200 o 400
```

**Payload**

```JSON
{
  "name": "mandarina oriental",
  "price": 10000
}
```

**Response**

```JSON
// /productos/1 y existe el producto con id = 1
// http code: 200
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "mandarina oriental",
    "price": 10000
  }
}

// /productos/200 y no existe el producto con id = 200
// http code: 400
{
  "status": "fail",
  "message": "product with id 200 does not exist"
}
```

### **DELETE**

Borra el producto con la id solicitada

**Http Status**

```
204 o 400
```

**Response**

```JSON
// /productos/1 y existe el producto con id = 1
// http code: 200
{
  "status": "success",
  "data": {}
}

// /productos/200 y no existe el producto con id = 200
// http code: 400
{
  "status": "fail",
  "message": "product with id 200 does not exist"
}
```

### `/cart`

**GET**

devuelve todos los productos dentro del carrito

**Http Status**

```
200
```

**Response**

```JSON
// carrito vacio
{
  "status": "success",
  "data": []
}

// carrito con 3 productos
{
  "status": "success",
  "data": [
    {
      "name": "mandaria",
      "quantity": 2
    },
    {
      "name": "banana",
      "quantity": 1
    }
  ]
}
```

**POST**

agrega el producto al carrito

**Http Status**

```
200 o 400
```

**Payload**

```JSON
{
  "id": 1,
  "quantity": 3
}
```

**Response**

```JSON
// el producto con id = 1 existe
// http code: 200
{
  "status": "success",
  "data" : [] // contenido del carrito
}

// el producto con id = 1 no existe
{
  "status": "fail",
  "message": "the product with id 1 does not exist"
}
```

### `/cart/pay`

**POST**

Retorna una lista con todos los productos del carrito, ademas del precio total de la compra. Deja el carrito completamente vacio.

**Http Status**

```
200
```

**Response**

```JSON
{
  "status": "success",
  "data": {
    "products": [
      {
        "name": "mandarina",
        "quantity": 3
      },
      {
        "name": "banana",
        "quantity": 1
      }
    ],
    "price": 500
  }
}
```
