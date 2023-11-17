import Head from 'next/head'; 
import './globals.css';
import { Inter, Lato } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });
const lato = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Blog Next app',
  description: 'Blog next app created by Tushar Anand in the guidance of Lama dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={lato.className}>
        <Navbar/>
        <div className='h-[80vh]'>
        {children}
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}