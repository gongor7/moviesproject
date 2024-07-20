# Despliegue de Aplicación Vue.js con Docker

Este documento describe el proceso para construir y ejecutar una aplicación Vue.js usando Docker. Asegúrate de tener Docker instalado y funcionando en tu máquina antes de comenzar.

## Requisitos

- Docker instalado en tu máquina.
- Código fuente de la aplicación Vue.js.

## Paso 1: Constuir la imagen`

`docker build -t moviesproject .`

## Paso 2 : ejecutar el contendor
`docker run -p 8083:8083 -v "<path del proyecto en el servidor>:/app" moviesproject`

## Paso 3: Desde el navegador entrar al proyecto
localhost:8083