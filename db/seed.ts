import sampleData from './sample-data';
import { db } from './prisma';

async function main() {
  await db.product.deleteMany();
  await db.account.deleteMany();
  await db.session.deleteMany();
  await db.verificationToke.deleteMany();
  await db.user.deleteMany();

  await db.product.createMany({
    data: sampleData.products,
  });
  await db.user.createMany({
    data: sampleData.users,
  });

  console.log('Database seeded successfully ');
}

main();
