import sampleData from './sample-data';
import { db } from './prisma';

async function main() {
  await db.product.deleteMany();

  await db.product.createMany({
    data: sampleData.products,
  });

  console.log('Database seeded successfully ');
}

main();
