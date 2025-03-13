import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href='/sign-in'>
          <User /> Signin
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U';
  return <>User</>;
};

export default UserButton;
