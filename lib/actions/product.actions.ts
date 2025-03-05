'use server';

import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { db } from '@/db/prisma';

export const getLatestProduct = async () => {
  const products = await db.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(products);
};

export const getProductBySlug = async (slug: string) => {
  const product = await db.product.findFirst({
    where: { slug: slug },
  });

  return convertToPlainObject(product);
};
