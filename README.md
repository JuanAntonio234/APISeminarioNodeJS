# API Seminario Node.js

## Instalación de dependencias

Ejecuta los siguientes comandos para instalar todas las dependencias necesarias:

### Swagger

```bash
npm i swagger-jsdoc
npm i swagger-ui-express
npm i @types/swagger-jsdoc -D
npm i @types/swagger-ui-express -D
```

### Express

```bash
npm i express
npm i @types/express -D
```

### Mongoose

```bash
npm i mongoose
```

### CORS

```bash
npm i cors
npm i @types/cors -D
```

### Dotenv

```bash
npm i dotenv
```

### Nodemon

```bash
npm i nodemon -D
```

### TypeScript 

```bash
npm i typescript -D
npm i ts-node -D
npm i @types/node -D
```

## Scripts disponibles

- **Modo desarrollo con Nodemon:**
  ```bash
  npm run dev
  ```
  Ejecuta la aplicación y reinicia automáticamente al detectar cambios.

## Ejecutar sin necesidad de transpilar a JS

```bash
npm install ts-node --save-dev
```
Esto permite ejecutar TypeScript directamente sin necesidad de convertirlo a JavaScript manualmente.
