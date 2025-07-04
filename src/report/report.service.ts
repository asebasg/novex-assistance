import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  // Crear reporte
  async create(createReportDto: CreateReportDto) {
    const { title, description, employeeId } = createReportDto as any;
    return this.prisma.report.create({
      data: {
        title,
        description,
        employee: { connect: { id: employeeId } },
      },
    });
  }

  // Encontrar todos los reportes
  async findAll() {
    return this.prisma.report.findMany({});
  }

  // Encontrar reporte por ID
  async findOne(id: number) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });

    if (!report) {
      throw new NotFoundException(
        `No se encontró ningún reporte con la ID proporcionada`,
      );
    }
    return report;
  }

  // Actualizar reporte
  async update(id: number, updateReportDto: UpdateReportDto) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(
        `No se encontró ningún reporte con la ID proporcionada`,
      );
    }
    return this.prisma.report.update({
      where: { id },
      data: updateReportDto,
    });
  }

  // Remover reporte
  async remove(id: number) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });

    if (!report) {
      throw new NotFoundException(
        `No se encontró ningún reporte con la ID proporcionada`,
      );
    }

    return this.prisma.report.delete({
      where: { id },
    });
  }
}
