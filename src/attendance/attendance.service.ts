import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance-dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  //   Crear asistencia
  async create(createAttendanceDto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: createAttendanceDto,
    });
  }

  //   Encontrar todas las asistencias
  async findAll() {
    return this.prisma.attendance.findMany({});
  }

  //   Encontrar asistencia por ID
  async findOne(id: number) {
    const user = await this.prisma.attendance.findUnique({
      where: { id },
    });

    // Si no se encuentra la asistencia
    if (!user) {
      throw new NotFoundException(
        `No se encontro ninguna asistencia con la ID proporcionada`,
      );
    }
    return user;
  }

  //   Actualizar asistencia
  async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    const user = await this.prisma.attendance.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(
        `No se encontro ninguna asistencia con la ID proporcionada`,
      );
    }
    return this.prisma.attendance.update({
      where: { id },
      data: updateAttendanceDto,
    });
  }

  //   Remover asistencia
  async remove(id: number) {
    const user = await this.prisma.attendance.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }

    return this.prisma.attendance.delete({
      where: { id },
    });
  }
}
