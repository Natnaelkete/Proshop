import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/shared/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex h-screen flex-col'>
            <Header />
            <main className='flex-1 wrapper'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
