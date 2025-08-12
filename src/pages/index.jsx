import OurServices from '@/components/OurServices/OurServices';
import AboutUs from '../components/AboutUs/AboutUs';
import Header from '../components/Header/Header';
import OurProducts from '@/components/OurProducts/OurProducts';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import TechStack from '@/components/TechStack/TechStack';
import Testimonial from '@/components/Testimonial/Testimonial';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <OurServices />
      <OurProducts />
      <WhyChooseUs />
      <TechStack />
      <Testimonial />
      <ContactUs />
    </>
  );
}


// #298cf3