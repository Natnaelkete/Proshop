'use server';

import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { db } from '@/db';

export const getLatestProduct = async () => {
  const product = await db.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });
  return convertToPlainObject(product);
};

export const getProductBySlug = async (slug: string) => {
  const product = await db.product.findFirst({
    where: { slug: slug },
  });

  return convertToPlainObject(product);
};
