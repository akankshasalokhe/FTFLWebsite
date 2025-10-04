import OurServices from '@/components/OurServices/OurServices';
import AboutUs from '../components/AboutUs/AboutUs';
import Header from '../components/Header/Header';
import FeaturedProducts from '@/components/OurProducts/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import TechStack from '@/components/TechStack/TechStack';
import Testimonial from '@/components/Testimonial/Testimonial';
import ContactUs from '@/components/ContactUs/ContactUs';
import TeamMembers from '@/components/CoreTeam/CoreTeam';

export default function Home() {
  return (
     <div className="overflow-x-hidden">
      <Header />
      <AboutUs />
      <OurServices />
      <FeaturedProducts />
      <WhyChooseUs />
      <TeamMembers />
      <TechStack />
      <Testimonial />
      <ContactUs />
    </div>
  );
}


// #298cf3