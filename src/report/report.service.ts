import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from './dto/create-CreateReportDto.dto';
import { UpdateReportDto } from './dto/update-CreateReportDto.dto';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  //   Crear usuuario
  async create(createReportDto: CreateReportDto) {
    return this.prisma.report.create({
      data: createReportDto,
    });
  }

  //   Encontrar a todos los usuarios
  async findAll() {
    return this.prisma.report.findMany({});
  }

  //   Encontrar usuario por ID
  async findOne(id: number) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });

    // Si no se encuentra al usuario
    if (!report) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }
    return report;
  }

  //   Actualizar usuario
  async update(id: number, updateReportDto: UpdateReportDto) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }
    return this.prisma.report.update({
      where: { id },
      data: updateReportDto,
    });
  }

  //   Remover usuario

  async remove(id: number) {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });

    if (!report) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }

    return this.prisma.report.delete({
      where: { id },
    });
  }
}
