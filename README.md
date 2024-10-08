# API REST de Tienda con MySQL2

Este proyecto es una práctica universitaria para la asignatura de Base de Datos, que implementa una API REST para una tienda utilizando Node.js, Express, y MySQL2 para la conexión con la base de datos.

## Descripción

El sistema proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos en una tienda. Utiliza MySQL como base de datos y el driver MySQL2 para la conexión desde Node.js.

## Requisitos

- Node.js
- MySQL
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/betooxx-dev/bdd-crud-mysql
   ```
2. Navega al directorio del proyecto:
   ```
   cd bdd-crud-mysql
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_de_tu_base_de_datos
   DB_PORT=3306
   ```

## Uso

1. Inicia el servidor:
   ```
   npm run dev
   ```
2. El servidor se iniciará en `http://localhost:3000` (o el puerto que hayas especificado en el archivo `.env`)

3. Utiliza los siguientes endpoints para interactuar con la API:

   - `GET /tienda/productos`: Obtener todos los productos
   - `GET /tienda/producto/:id`: Obtener un producto específico
   - `POST /tienda/productos`: Agregar un nuevo producto
   - `PUT /tienda/productos/:id`: Actualizar un producto existente
   - `DELETE /tienda/product/:id`: Eliminar un producto

## Estructura del proyecto

```
├── controllers/
│   ├── index.controller.js
│   └── tienda.controller.js
├── routes/
│   ├── index.routes.js
│   └── tienda.routes.js
├── app.js
├── config.js
├── db.js
├── index.js
└── .env
```

## Características

- Implementación de operaciones CRUD para productos
- Uso de MySQL2 para conexión eficiente con MySQL
- Estructura modular con separación de rutas y controladores
- Manejo básico de errores
- Uso de variables de entorno para configuración

## Consideraciones

- Este es un ejemplo educativo y no debe usarse en producción sin implementar medidas de seguridad adicionales.
- Se recomienda implementar validación de datos de entrada y sanitización para prevenir inyecciones SQL.
- En un entorno de producción, se debería implementar autenticación y autorización.
