import upstackImg from '../../../assets/upstack.png';
import infinitiveImg from '../../../assets/infinitive.png';
import assurantImg from '../../../assets/assurant.png';
import pcxImg from '../../../assets/pcx.png';
import seasiaImg from '../../../assets/seasia.png';
import devlabsImg from '../../../assets/devlabs.png';
import './TrustedClients.css';

const TrustedClients = () => {
  const clients = [
    { name: 'Upstack', logo: upstackImg },
    { name: 'Infinitive', logo: infinitiveImg },
    { name: 'Assurant', logo: assurantImg },
    { name: 'PCX', logo: pcxImg },
    { name: 'Seasia', logo: seasiaImg },
    { name: 'Devlabs', logo: devlabsImg },
  ];

  return (
    <section className="relative px-4 pt-0 md:pt-0 lg:mt-8 pb-16 md:pb-20 lg:pb-20 text-white">
      <div className="max-w-[1150px] mx-auto">

        {/* Eyebrow + Heading */}
        <p className="text-sky-400 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-center mb-3">
          OUR TRUSTED PARTNERS
        </p>

        <h2 className="font-semibold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.5px] text-white text-center mb-3">
          Our Trusted <span className="text-[#04A3DA]">Clients</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base text-center max-w-xl mx-auto mb-8 md:mb-12">
          We're proud to power products for teams who trust us with their most important work.
        </p>

        {/* Ambient Card */}
        <div className="relative bg-gradient-to-br from-[#0C192E] via-[#0F2847] to-[#0A1424] border border-sky-500/30 rounded-3xl shadow-2xl overflow-hidden py-10 sm:py-12">

          {/* Ambient background glow, matching the rest of the site */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-500/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="marquee-wrapper relative overflow-hidden">

            {/* Left fade, matches card background so logos ease in/out instead of cutting off */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-14 sm:w-28 bg-gradient-to-r from-[#0C192E] via-[#0C192E]/70 to-transparent z-10" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-14 sm:w-28 bg-gradient-to-l from-[#0A1424] via-[#0A1424]/70 to-transparent z-10" />

            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="group flex-shrink-0 mx-3 sm:mx-4"
                >
                  <div className="flex items-center justify-center bg-white border border-sky-500/30 rounded-2xl px-6 py-4 sm:px-8 sm:py-5 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 sm:h-10 md:h-11 w-auto object-contain opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedClients;
