# TechStore - Proyecto con PostgreSQL, Express y React

Este es un proyecto de **TechStore**, una aplicación desarrollada con **Node.js (Express)** para el backend y **React** para el frontend. La base de datos utilizada es **PostgreSQL**.

---

## 📌 **Instalación de PostgreSQL**

### 🔹 **En macOS (usando Homebrew)**

```sh
brew install postgresql
brew services start postgresql
```

### 🔹 **En Ubuntu / Debian**

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### 🔹 **En Windows**

1. Descarga el instalador desde: https://www.postgresql.org/download/
2. Sigue las instrucciones de instalación.
3. Inicia el servicio PostgreSQL desde pgAdmin o ejecutando:

```sh
net start postgresql
```

### 🔹 **Verificar instalación**

Para comprobar que PostgreSQL está corriendo, usa:

```sh
psql -U postgres
```

Si la conexión es exitosa, estás listo para continuar.

## **🚀 Configuración del Proyecto**

Este repositorio contiene dos carpetas principales:

- `back/` → Contiene el código del backend con Express y PostgreSQL.
- `front/` → Contiene el código del frontend en React.

### 🔹 **1. Clonar el repositorio**

```sh
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```

### 🔹 **2. Configurar el Backend**

```sh
cd back
yarn install
```

### Crear Base de datos y tablas

En la carpeta `back/db/database.sql` se encuentra las queries para poder crear la base de datos y las tablas necesarias para ejecutar el proyecto.

### Configurar variables de entorno (.env)

En la carpeta `back/`, crea un archivo `.env` y agrega:

```ini
HOST=localhost
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_DATABASE=techstore

SALT_ROUNDS=5

JWT_SECRET=(la dejo en el comentario de la plataforma)
JWT_EXPIRES_IN=1h
```

- 🔹 Reemplaza `tu_contraseña` con la contraseña de PostgreSQL.
- 🔹 Si el usuario no es `postgres`, cambia el usuario.

### Ejecutar el Backend

```sh
yarn dev
```

Esto iniciará el servidor en http://localhost:3000/api/v1.

### **🔹 3. Configurar el Frontend**

```sh
cd ../front
yarn install
```

Ejecutar el Frontend

```sh
yarn dev
```

Esto abrirá la aplicación en http://localhost:5173..

### Usuario Admin de prueba

Para poder ingresar al dashboard como admin, se debe crear el usuario por medio del endpoint "http://localhost:3000/api/v1/register", desde un servicio como postman enviando el siguiente JSON como body

```json
{
  "email": "vivianadmin@techstore.com",
  "password": "123456",
  "name": "Viviana",
  "role": "admin"
}
```

## 📌 Estructura del Proyecto

```bash
/techstore
│── back/         # Código del backend (Express, PostgreSQL)
│   ├── db/       # Configuración de la base de datos después de instalada correr las queries
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/  # Controladores de la API
│   │   ├── routes/       # Definición de rutas
│   │   │   ├── authMiddleware.js  # Middleware de autenticación
│   │   │   ├── config.js          # Configuración general
│   │   │   ├── db.js              # Conexión a PostgreSQL
│   │   │   ├── index.js           # Archivo principal de rutas
│   │   ├── app.js         # Configuración de Express
│   ├── .env              # Variables de entorno
│   ├── .gitignore
│   ├── package.json      # Dependencias del backend
│   ├── yarn.lock
│
│── front/        # Código del frontend (React + Vite)
│   ├── node_modules/
│   ├── public/   # Archivos estáticos
│   ├── src/
│   │   ├── actions/      # Acciones, API calls
│   │   ├── assets/       # Imágenes, fuentes, etc.
│   │   ├── components/   # Componentes reutilizables
│   │   ├── mockup/       # Datos de prueba
│   │   ├── pages/        # Páginas principales del proyecto
│   │   ├── store/        # Estado global (Zustand)
│   │   ├── types/        # Definiciones de TypeScript
│   │   ├── App.css       # Estilos globales
│   │   ├── App.tsx       # Componente principal de la app
│   │   ├── index.css     # Estilos globales
│   │   ├── main.tsx      # Punto de entrada de React
│   │   ├── vite-env.d.ts # Configuración de TypeScript para Vite
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json      # Dependencias del frontend
│   ├── README.md         # Documentación del proyecto
│   ├── tsconfig.app.json
```
