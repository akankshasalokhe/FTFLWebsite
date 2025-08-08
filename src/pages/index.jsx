import OurServices from '@/components/OurServices/OurServices';
import AboutUs from '../components/AboutUs/AboutUs';
import Header from '../components/Header/Header';
import OurProducts from '@/components/OurProducts/OurProducts';

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <OurServices />
      <OurProducts />
    </>
  );
}
