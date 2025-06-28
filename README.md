# Novex Assistance
Novex Assistance es una API REST desarrollada con tecnología NestJS y Prisma que permite llevar el control de asistencias y reportes de múltiples entidades tales como empresas, colegios, universidades, etc. Esta API está diseñada para ser utilizada por empleadores, empresarios o terceros que deseen integrar funcionalidades de control de asistencia en sus negocios y empresas.

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

## Cambios realizados el 27/06/2025

- Corrección de los nombres de los módulos exportados: ahora se exportan correctamente `EmployeeModule`, `AttendanceModule` y `ReportModule` para evitar errores de importación en `app.module.ts`.
- Actualización de los DTOs:
  - `CreateReportDto` ahora incluye los campos `employeeId` y `userId` requeridos por el modelo Prisma.
  - Se corrigieron los DTOs de actualización para que los campos sean opcionales y sigan la convención de nombres de NestJS.
- Corrección de los servicios:
  - El método `create` de `ReportService` ahora conecta correctamente las relaciones con `employee` y `user` usando los IDs recibidos en el DTO.
- Corrección de los controladores:
  - Se corrigieron los nombres de clases, rutas y comentarios para que sean coherentes con la entidad que gestionan (usuario, empleado, asistencia, reporte).
- Limpieza de comentarios y mensajes de error para mayor claridad y coherencia.

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