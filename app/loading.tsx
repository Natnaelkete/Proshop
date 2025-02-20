import Image from 'next/image';
import loader from '@/assets/loader.gif';
import { Button } from '@/components/ui/button';
import { resolve } from 'path';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image src={loader} width={80} height={80} alt='Loading...' />
    </div>
  );
};

export default LoadingPage;
