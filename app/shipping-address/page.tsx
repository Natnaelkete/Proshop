import { auth } from '@/auth';
import { getMyCart } from '@/lib/actions/cart.action';
import { getUserById } from '@/lib/actions/user.action';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ShippingAddressForm from './shipping-address-form';
import { ShippingAddress } from '@/types';

export const metadata: Metadata = {
  title: 'Shipping Address',
};

const ShippingAddress = async () => {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect('/cart');

  const session = await auth();

  const userId = session?.user?.id;
  if (!userId) throw new Error('No user id');

  const user = await getUserById(userId);
  return (
    <>
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddress;
