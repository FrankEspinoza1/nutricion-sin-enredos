# CRUD de Servicios - Nutricion Sin Enredos

Proyecto de la Evidencia 2 (AA2) del curso Desarrollo y soporte de aplicaciones multiplataforma.
Instituto Certus - Grupo 3.

## Integrantes

- Espinoza Espindola, Franklin
- Huaman Ventura, Jesus
- Paredes Torrejon, Jean
- Taquire Rodriguez, Elmer

## Descripcion

Aplicacion web que permite administrar la lista de servicios nutricionales
mediante las cuatro operaciones basicas: crear, leer, actualizar y eliminar.

## Arquitectura

| Capa | Tecnologia | Donde se ejecuta |
|---|---|---|
| Presentacion | HTML5, CSS3, JavaScript, Bootstrap | Navegador del cliente |
| Aplicacion | Node.js con Express | Servidor de aplicacion (Render) |
| Datos | MongoDB | Servidor de base de datos (MongoDB Atlas) |

## Estructura del proyecto

```
crud-servicios/
├── .github/workflows/deploy.yml   Despliegue automatico (GitHub Actions)
├── public/                        Frontend
│   ├── index.html
│   └── app.js
├── src/                           Backend
│   ├── config/db.js               Conexion a MongoDB
│   ├── models/Servicio.js         Modelo de datos
│   ├── routes/servicios.js        Rutas del CRUD
│   └── server.js                  Punto de entrada
├── .env.example                   Variables de entorno de ejemplo
└── package.json
```

## Endpoints

| Metodo | Ruta | Accion |
|---|---|---|
| GET | /api/servicios | Listar todos |
| GET | /api/servicios/:id | Obtener uno |
| POST | /api/servicios | Crear |
| PUT | /api/servicios/:id | Actualizar |
| DELETE | /api/servicios/:id | Eliminar |

## Como ejecutarlo localmente

1. Instalar las dependencias:

   npm install

2. Copiar `.env.example` como `.env` y colocar la cadena de conexion de MongoDB Atlas.

3. Iniciar el servidor:

   npm start

4. Abrir http://localhost:3000

## Archivos de configuracion

- `.github/workflows/deploy.yml` - configuracion del despliegue continuo
- `.env.example` - variables de entorno requeridas por el servidor
- `package.json` - dependencias y comandos del proyecto
