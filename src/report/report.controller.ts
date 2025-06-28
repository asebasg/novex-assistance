import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  // Método POST (crear un usuario)
  @Post()
  create(@Body() createUserDto: CreateReportDto) {
    return this.reportService.create(createUserDto);
  }

  // Método GET all (obtener todos los usuarios)
  @Get()
  findAll() {
    return this.reportService.findAll();
  }

  // Método GET (obtener un usuario por id)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.findOne(id);
  }

  // Método PATCH (actualizar un usuario)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateReportDto,
  ) {
    return this.reportService.update(id, updateUserDto);
  }

  // Método DELETE (eliminar un usuario)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.remove(id);
  }
}
