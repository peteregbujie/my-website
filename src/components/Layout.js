import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
 return (
  <>
   <Head>
    <title>Peteregbujie.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico"></link>
   </Head>
   <Navbar />
   <main className="flex flex-col items-center justify-center">{children}</main>
   <Footer />
  </>
 );
}

export default Layout;
