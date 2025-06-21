# Novex Assistance
Novex Assistance es una API REST desarrollada con tecnología NestJS y Prisma que permite llevar el control de asistencias y reportes de múltiples entidades tales como empresas, colegios, universidades, etc. Esta API está diseñada para ser utilizada por empleadores, empresarios o terceros que deseen integrar funcionalidades de control de asistencia en sus negocios y empresas.

## Características
### Gestión de Asistencias
El programa permite registrar, consultar, actualizar y eliminar asistencias de empleados o estudiantes. Cada asistencia puede incluir información como: Fecha, estado (presente, ausente, etc,), notas adicionales, entre otros.

### Reportes
Además de la gestión de asistencias, la API permite generar reportes detallados sobre la asistencia de los empleados o estudiantes.

## Tecnologías utilizadas
- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **Prisma**: ORM para Node.js y TypeScript, utilizado para interactuar con la base de datos.
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información de asistencia y reportes.

Para migrar base de datos: npx prisma migrate dev --name init.

## Estructura del proyecto
```
NOVEX-ASSISTANCE/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── attendance/
│   │   ├── attendance.controller.spec.ts
│   │   ├── attendance.controller.ts
│   │   ├── attendance.module.ts
│   │   ├── attendance.service.spec.ts
│   │   └── attendance.service.ts
│   │
│   ├── employee/
│   │   ├── employee.controller.spec.ts
│   │   ├── employee.controller.ts
│   │   ├── employee.module.ts
│   │   ├── employee.service.spec.ts
│   │   └── employee.service.ts
│   │
│   ├── report/
│   │   ├── report.controller.spec.ts
│   │   ├── report.controller.ts
│   │   ├── report.module.ts
│   │   └── report.service.ts
│   │
│   ├── user/
│   │   ├── user.controller.spec.ts
│   │   ├── user.controller.ts
│   │   ├── user.module.ts
│   │   └── user.service.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
├── .gitignore
├── .eslintrc.js
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```