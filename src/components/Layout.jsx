// components/Layout.js
import Head from 'next/head';
import Navbar from '../components/Header/Navbar';
// app/layout.tsx

// import Footer from '@/components/Footer/Footer';
const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'My IT Company'}</title>
        <meta name="description" content={description || 'We provide IT services and software development'} />
        <meta name="keywords" content={keywords || 'IT Company, Web Development, Software Solutions'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
