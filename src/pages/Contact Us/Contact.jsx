import map from '../../assets/map.webp';
import './contact.css';

import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

const Contact = () => {
  return (
    <>
      <Hero />

      <main   className="min-h-screen pb-16 px-4 md:px-6 lg:px-8 mb-[-90px] lg:mb-[-90px] md:mb-[-150px] md:mt-0">
        <section   className="max-w-[1050px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 mb-16">
          <ContactInfo  />
          <ContactForm  />
        </section>

        <MapSection  />
        <FAQ  />
        <CTA  />
      </main>
    </>
  );
};

export default Contact;
