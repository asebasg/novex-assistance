# Novex Assistance

Novex Assistance es una API REST desarrollada con tecnología NestJS y Prisma para el control de asistencias y reportes en empresas, colegios, universidades y otras entidades. Permite a empleadores y administradores gestionar empleados, asistencias y reportes de manera eficiente y segura.

## Características principales

- **Gestión de usuarios:** Registro, consulta, actualización y eliminación de usuarios con roles.
- **Gestión de empleados:** CRUD de empleados, asociación opcional a usuarios.
- **Gestión de asistencias:** Registro de asistencias con fecha, hora de entrada/salida, estado y notas.
- **Gestión de reportes:** Generación y consulta de reportes asociados a empleados y usuarios.
- **Relaciones entre entidades:** Usuarios pueden tener varios empleados y reportes; empleados pueden tener varias asistencias y reportes.
- **Seguridad:** Preparado para autenticación y autorización (puedes integrar JWT fácilmente).
- **Base de datos relacional:** Uso de MySQL y Prisma ORM para integridad y consultas eficientes.

## Estructura del proyecto

```
novex-assistance/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── attendance/
│   │   ├── attendance.controller.ts
│   │   ├── attendance.module.ts
│   │   ├── attendance.service.ts
│   │   └── dto/
│   ├── employee/
│   │   ├── employee.controller.ts
│   │   ├── employee.module.ts
│   │   ├── employee.service.ts
│   │   └── dto/
│   ├── report/
│   │   ├── report.controller.ts
│   │   ├── report.module.ts
│   │   ├── report.service.ts
│   │   └── dto/
│   ├── user/
│   │   ├── user.controller.ts
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │   └── dto/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Dependencias principales

- **@nestjs/common, @nestjs/core, @nestjs/platform-express:** Framework NestJS.
- **@prisma/client, prisma:** ORM para Node.js y TypeScript.
- **MySQL:** Motor de base de datos relacional.
- **reflect-metadata, rxjs, cors:** Utilidades para el entorno Node/Nest.
- **Herramientas de desarrollo:** eslint, prettier, jest, ts-jest, supertest, typescript.

## Instalación y uso rápido

1. Clona el repositorio y entra a la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos en el archivo `.env` (ya existe un ejemplo para MySQL).
4. Ejecuta las migraciones de Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Inicia el servidor de desarrollo:
   ```bash
   npm run start:dev
   ```

## Funcionalidades

- **Usuarios:** Crear, consultar, actualizar y eliminar usuarios.
- **Empleados:** Crear, consultar, actualizar y eliminar empleados, con opción de asociar a un usuario.
- **Asistencias:** Registrar, consultar, actualizar y eliminar asistencias de empleados.
- **Reportes:** Crear y consultar reportes asociados a empleados y usuarios.
- **Relaciones:** Consultas anidadas y relaciones entre usuarios, empleados, asistencias y reportes.

## Notas adicionales

- El archivo `.env` debe contener la variable `DATABASE_URL` con la cadena de conexión a MySQL.
- El proyecto está preparado para agregar autenticación JWT y middlewares de seguridad.
- Puedes extender el modelo de roles y permisos fácilmente desde el archivo `schema.prisma`.
- Para pruebas y desarrollo, puedes usar herramientas como Postman para consumir los endpoints.

> - Este proyecto utiliza la dependencia de "cors" para ejecutarse y admitir dos servidores con puertos distintos desde la API REST y el frontend.