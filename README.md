# Crear un backend básico con Node.js y Express

# Inicializar proyecto

npm init -y

# Instalar dependencias

npm install express
npm install --save-dev nodemon

# Crear la estructura básica

// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hello World desde mi backend con Express");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


# Agregar script a package.json

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

# Ejecutar el servidor

npm start
npm run dev
