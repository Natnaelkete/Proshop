import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';
import { db } from '.';

async function main() {
  await db.product.deleteMany();

  await db.product.createMany({
    data: sampleData.products,
  });

  console.log('Database seeded successfully ');
}

main();
