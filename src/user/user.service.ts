import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //   Crear usuuario
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  //   Encontrar a todos los usuarios
  async findAll() {
    return this.prisma.user.findMany({});
  }

  //   Encontrar usuario por ID
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    // Si no se encuentra al usuario
    if (!user) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }
    return user;
  }

  //   Actualizar usuario
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  //   Remover usuario

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        `No se encontro ningun usuario con la ID proporcionada`,
      );
    }

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
