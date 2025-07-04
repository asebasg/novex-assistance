// Para ejecutar el seeder: npx prisma db seed
// Nota: Primero debe de ejecutarse el comando anterior y luego iniciar el servidor

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear empleados
  await prisma.employee.createMany({
    data: [
      { name: 'Juan Pérez', document: 12345678, note: 'Empleado de planta' },
      { name: 'Ana Gómez', document: 87654321, note: 'Empleado temporal' },
    ],
    skipDuplicates: true,
  });

  // Crear asistencias
  await prisma.attendance.createMany({
    data: [
      {
        date: new Date('2025-07-01T08:00:00.000Z'),
        entryTime: new Date('2025-07-01T08:00:00.000Z'),
        exitTime: new Date('2025-07-01T17:00:00.000Z'),
        status: 'PRESENT',
        employeeId: 1,
      },
      {
        date: new Date('2025-07-01T08:00:00.000Z'),
        entryTime: new Date('2025-07-01T08:15:00.000Z'),
        exitTime: new Date('2025-07-01T17:00:00.000Z'),
        status: 'LATE',
        employeeId: 2,
      },
    ],
    skipDuplicates: true,
  });

  // Crear reportes
  await prisma.report.createMany({
    data: [
      {
        title: 'Reporte de asistencia Juan',
        description: 'Asistencia completa de Juan Pérez',
        employeeId: 1,
        userId: 1,
      },
      {
        title: 'Reporte de asistencia Ana',
        description: 'Asistencia con retraso de Ana Gómez',
        employeeId: 2,
        userId: 1,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Base de datos poblada con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
