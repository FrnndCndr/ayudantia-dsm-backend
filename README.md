
# Backend - Ayudantía DSM

Este backend forma parte del sistema de gestión para paseadores de mascotas. Está construido con **Node.js**, **Express**, **Sequelize**, y utiliza **SQLite** como base de datos.

---

## Instalación

```bash
npm install
```

### Variables de entorno

Crear un archivo `.env` con el siguiente contenido:

```env
PORT=
JWT_SECRET=
NODE_ENV=
```
## Para generar un JWT secreto:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Iniciar el servidor

```bash
npm run dev
```

---

## Comandos útiles

### Crear un nuevo seed o migración
```bash
npx sequelize-cli seed:generate --name NOMBRE
npx sequelize-cli migration:generate --name NOMBRE
```

### Migraciones y seeds

```bash
# Crear base de datos y aplicar migraciones
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Deshacer migraciones
npx sequelize-cli db:migrate:undo:all

# Reiniciar seeds
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all

# Eliminar y recrear todo desde cero
npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

---

## Estructura del proyecto

```
├── src/                        # Código fuente principal
│   ├── config/                 # Configuración general del proyecto
│   │   ├── config.json         # Configuración de Sequelize (dev, test, prod)
│   ├── controllers/            # Lógica de negocio (manejo de requests/responses)
│   ├── middlewares/            # Middlewares personalizados para Express
│   ├── migrations/             # Migraciones de la base de datos (sequelize-cli)
│   ├── models/                 # Definición de modelos y conexión DB
│   │   ├── database/           # Configuración de Sequelize y modelos
│   │   │   ├── index.js        # Carga dinámica de modelos y asociaciones
│   │   │   ├── sequelize.js    # Conexión manual a SQLite
│   │   ├── server.js           # Clase Server: configuración de Express y DB
│   ├── routes/                 # Definición de endpoints de la API
│   ├── seeders/                # Datos iniciales de prueba (sequelize-cli)
│   ├── tests/                  # Pruebas automatizadas
│   │   ├── integration/        # Pruebas de endpoints y flujos completos
│   │   ├── unit/               # Pruebas unitarias por funciones/módulos
│   ├── utils/                  # Funciones auxiliares y servicios externos
├── app.js                      # Punto de entrada del servidor
├── .sequelizerc                # Configuración personalizada de sequelize-cli
├── localDb.sqlite              # Base de datos local (SQLite)

```

---

## Dependencias principales

```bash
# Core
npm install express cors morgan sequelize sqlite3 jsonwebtoken bcryptjs multer dotenv


# Dev y herramientas
npm install --save-dev nodemon sequelize-cli