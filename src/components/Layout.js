import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({children}) {
  return (
   <>
    <Head>
     <title>Peteregbujie.com</title>
    </Head>
    <Navbar />
    <main
      className='flex flex-col justify-center'
    >
     {children}
    </main>
    <Footer />
   </>
  );
}

export default Layout