# Descripción

## Entorno desarrollo

1. Clonar el repositorio
2. Crear una copia del `.env.template` y renombrarlo `.env` y cambiar las variables de entorno.
3. Instalar dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Corres las migraciones de Prisma ``npx prisma migrate dev`
6. Ejecutar sedd `npm run seed`
7. Correr poryecto `npm dev`

## Entorno de producción
