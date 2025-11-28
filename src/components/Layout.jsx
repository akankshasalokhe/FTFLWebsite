// components/Layout.js
import Head from 'next/head';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
// app/layout.tsx

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'FTFL Technology'}</title>
        <meta name="description" content={description || 'We provide IT services and software development'} />
        <meta name="keywords" content={keywords || 'IT Company, Web Development, Software Solutions'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ✅ ADD THE GOOGLE VERIFICATION META TAG HERE */}
        <meta name="google-site-verification" content="1eXd0MDgMmbMVcKIm8vOHJwZEKLptACE72ScbiZHM7M" />


        {/* ✅ Favicon link */}
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel="icon" type="image/jpeg" href="/FTFL.jpg" />
      </Head>
      <div className='min-h-screen'>
      <Navbar />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
      </div>
    </>
  );
};

export default Layout;
