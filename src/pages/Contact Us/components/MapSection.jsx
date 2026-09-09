const MapSection = () => {
  return (
    <div className="mt-[-30px] md:mt-0 lg:mt-0">
      <section className="max-w-[1050px] mx-auto mb-20">
        <div className="w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <iframe
            src="https://www.google.com/maps?q=Jawam+Infotech,+Plot+No.+196,+PU-4,+3rd+Floor,+Behind+Malhar+Mega+Mall,+Scheme+No.+54,+Vijay+Nagar,+Indore+-+452010,+Madhya+Pradesh,+India&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default MapSection;
