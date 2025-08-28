import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Product, Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async deleteProduct(
    where: Prisma.ProductWhereUniqueInput,
  ): Promise<Product> {
    return this.prisma.product.delete({
      where,
    });
  }
}