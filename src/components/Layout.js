import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({children}) {
  return (
   <div>
    <Head>
     <title>Peteregbujie.com</title>
    </Head>
    <Navbar />
    <main
      className='flex flex-col justify-center mx-auto relative bg-white dark:bg-black px-8 text-gray-900 dark:text-gray-100'
    >
     {children}
    </main>
    <Footer />
   </div>
  );
}

export default Layout