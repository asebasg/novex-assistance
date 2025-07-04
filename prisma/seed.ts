// Para poblar la base de datos del seeder usar: npx prisma db seed
// Nota: Usar antes de ejecutar el servidor local.

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear empleados
  await prisma.employee.createMany({
    data: [
      { name: 'Empleado 1', document: 123456789, note: 'Empleado de planta', },
      { name: 'Empleado 2', document: 987654321, note: 'Contratista' },
    ],
    skipDuplicates: true,
  });

  // Crear publicaciones
  await prisma.report.createMany({
    data: [
      {
        title: 'Reporte: Llegadas tarde',
        description: 'El empleado siempre llega tarde.',
        employeeId: 27,
      },
      {
        title: 'Reporte: Falta de materiales',
        description: 'El empleado no tiene los materiales necesarios.',
        employeeId: 28,
      },
    ],
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