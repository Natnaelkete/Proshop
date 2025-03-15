import { signIn } from '@/auth';

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button type='submit'>Sign in with Google</button>
      </form>
    </div>
  );
}
