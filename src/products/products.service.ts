import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prisma.product.findUnique({
        where: { id },
      });
    } catch (error) {
      return { message: 'Product not found', error: error };
    }
  }

  async create(createProductDto) {
    try {
      return await this.prisma.product.create({
        data: {
          ...createProductDto,
        },
      });
    } catch (error) {
      return { message: 'Product not created', error: error };
    }
  }

  async update(id: number, updateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: {
          ...updateProductDto,
        },
      });
    } catch (error) {
      return { message: 'Product not updated', error: error };
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      return { message: 'Product not deleted', error: error };
    }
  }
}
