import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  // Crear empleado
  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  // Encontrar todos los empleados
  async findAll() {
    return this.prisma.employee.findMany({});
  }

  // Encontrar empleado por ID
  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    // Si no se encuentra al empleado
    if (!employee) {
      throw new NotFoundException(
        `No se encontro ningun empleado con la ID proporcionada`,
      );
    }
    return employee;
  }

  // Actualizar un empleado
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException(
        `No se encontro ningun empleado con la ID proporcionada`,
      );
    }
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  // Eliminar un empleado
  async remove(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException(
        `No se encontro ningun empleado con la ID proporcioanda`,
      );
    }

    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
