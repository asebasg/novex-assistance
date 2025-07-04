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
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
    });

    // Si no se encuentra la asistencia
    if (!attendance) {
      throw new NotFoundException(
        `No se encontro ninguna asistencia con la ID proporcionada`,
      );
    }
    return attendance;
  }

  //   Actualizar asistencia
  async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
    });
    if (!attendance) {
      throw new NotFoundException(
        `No se encontro ninguna asistencia con la ID proporcionada`,
      );
    }
    // Solo incluir campos definidos para evitar nulls
    const data: Partial<UpdateAttendanceDto> = {};
    if (typeof updateAttendanceDto.date !== 'undefined')
      data.date = updateAttendanceDto.date;
    if (typeof updateAttendanceDto.entryTime !== 'undefined')
      data.entryTime = updateAttendanceDto.entryTime;
    if (typeof updateAttendanceDto.exitTime !== 'undefined')
      data.exitTime = updateAttendanceDto.exitTime;
    if (typeof updateAttendanceDto.status !== 'undefined')
      data.status = updateAttendanceDto.status;
    if (typeof updateAttendanceDto.employeeId !== 'undefined')
      data.employeeId = updateAttendanceDto.employeeId;
    return this.prisma.attendance.update({
      where: { id },
      data,
    });
  }

  //   Remover asistencia
  async remove(id: number) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
    });

    if (!attendance) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }

    return this.prisma.attendance.delete({
      where: { id },
    });
  }
}
