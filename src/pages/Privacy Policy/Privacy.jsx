import React from 'react';
import './privacy.css';

const Privacy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="privacy-overlay-anim fixed px-4 inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="privacy-modal-anim bg-[#0F172A] border border-[#BDBDBDB0] sm:rounded-2xl rounded-t-2xl shadow-2xl max-w-4xl w-full h-[92vh] sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 bg-[#0F172A] border-b border-[#BDBDBDB0]  lg:px-4 md:px-4 py-0 lg:py-3 md:py-3 mt-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-sky-400 pl-4">
            Privacy Policy
          </h1>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/70 hover:text-white transition-colors text-2xl font-light shrink-0 w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 space-y-5 sm:space-y-6">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Jawam Infotech values the trust you place in us when you visit our website or interact with our services. This Privacy Policy explains how we collect, manage, and protect the information shared with us through our website and digital platforms.
          </p>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              To provide better services and support, we may collect certain types of information from users.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Information Provided by You</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              When you contact us, submit an inquiry, request a consultation, or fill out any form on our website, we may collect information such as your name, email address, phone number, company details, and project requirements.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Technical and Usage Information</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              When you browse our website, certain information may be collected automatically, such as device type, browser information, IP address, and pages you visit.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Purpose of Collecting Information</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We may use collected information for responding to inquiries, providing consultations, improving website functionality, sending updates, and monitoring website performance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Information Sharing</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Jawam Infotech respects your privacy and does not sell or trade personal information. Information may only be shared with trusted service partners or when required by law.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Data Protection</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We take reasonable steps to protect personal information from unauthorized access, misuse, or loss.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Updates to This Policy</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Jawam Infotech may revise this Privacy Policy from time to time to reflect updates in legal requirements or business practices.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2 pb-2">
            <h2 className="text-base sm:text-lg font-semibold text-sky-400">Contact Information</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a href="mailto:info@jawaminfotech.com" className="text-sky-400 hover:text-sky-300 transition-colors text-sm md:text-base font-medium break-all">
              info@jawaminfotech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;