import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState, useRef } from 'react'
import Navbar from './common components/Navbar'
import Preloader from './common components/Preloader'
import Footer from './common components/Footer'
import GlobalContact from './common components/GlobalContact'
import CookieConsent from './common components/CookieConsent'
const Portfolio = lazy(() => import('./pages/Portfolio Page/Portfolio'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))
const Careers = lazy(() => import('./pages/careers/Careers'))
const Contact = lazy(() => import('./pages/Contact Us/Contact'))
const Event = lazy(() => import('./pages/Event page/Event'))
const Talent = lazy(() => import('./pages/Talent Page/Talent'))
const Work = lazy(() => import('./pages/Work Page/Work'))
const Augmentation = lazy(() => import('./pages/Staff Agumentation/Augmentation'))
const CaseStudy = lazy(() => import('./pages/Case Study/CaseStudy'))
const FeedOpsCaseStudy = lazy(() => import('./pages/Case Study/FeedOps/FeedOpsCaseStudy'))
const HireRampCaseStudy = lazy(() => import('./pages/Case Study/HireRamp/HireRampCaseStudy'))
const PocketGeekCaseStudy = lazy(() => import('./pages/Case Study/PocketGeek/PocketGeekCaseStudy'))
const Products = lazy(() => import('./pages/Products Page/Products'))
const About = lazy(() => import('./pages/Our Technology/About'))
const AboutPage = lazy(() => import('./pages/About Page/About'))
const Industries = lazy(() => import('./pages/Industries Page/Industries'))
const JMart24 = lazy(() => import('./pages/JMart24 Page/Jmart'))
const AiSolutions = lazy(() => import('./pages/AI Solutions/AiSolutions'))
const OpenRoles = lazy(() => import('./pages/careers/component/OpenRoles'))
const WhyJoinUs2 = lazy(() => import('./pages/Why Join page/WhyJoinUs2'))
const TermsModal = lazy(() => import('./pages/Terms and Conditions/Terms.jsx'))
const PrivacyModal = lazy(() => import('./pages/Privacy Policy/Privacy.jsx'))
const Services = lazy(() => import('./pages/Our Services/Services'))
const Modern = lazy(() => import('./pages/Modern Business/Modern'))
const Hire = lazy(() => import('./pages/Hire Developers/Hire'))
const Schedule = lazy(() => import('./pages/Schedule Consultation/Schedule'))
const DataEngineering = lazy(() => import('./pages/Data Engineering/DataEngineering'))
const AiMlTechnology = lazy(() => import('./pages/Machine Learning/AiMlTechnology'))
const BlockchainTechnology = lazy(() => import('./pages/Blockchain Technology/BlochchainTechnology'))
const Devops = lazy(() => import('./pages/Devops Technology/Devops'))
const Mobile = lazy(() => import('./pages/Mobile Development/Mobile'))
const SoftwareDevelopment = lazy(() => import('./pages/Software Development/SoftwareDevelopment'))
const WebDevelopment = lazy(() => import('./pages/Web Development/WebDevelopment'))
const MobileAppDevelopment = lazy(() => import('./pages/Mobile App Development/MobileAppDevelopment'))
const UiUxDesign = lazy(() => import('./pages/UIUX Design/UiUxDesign'))
const ArtificialIntelligence = lazy(() => import('./pages/Artificial Intelligence/ArtificialIntelligence'))
const DevopsAndCloud = lazy(() => import('./pages/Devops and cloud/DevopsAndCloud'))
const CustomSoftware = lazy(() => import('./pages/Custom Software/CustomSoftware'))
const ThirdPartyIntegration = lazy(() => import('./pages/Third Party Integration/ThirdPartyIntegration'))
const FullStackDevelopment = lazy(() => import('./pages/Full Stack Development/FullStackDevelopment'))
const QaTesting = lazy(() => import('./pages/QA & Testing/QaTesting'))
const DataAnalytics = lazy(() => import('./pages/Data Analytics/DataAnalytics'))
const CrmCustomization = lazy(() => import('./pages/CRM Costomization/CrmCustomization'))
const SeoSmo = lazy(() => import('./pages/SEO SMO/SeoSmo'))
const ItStaffAugmentation = lazy(() => import('./pages/IT Staff Agumentation/ItStaffAugmentation'))
const DataEngineeringServices = lazy(() => import('./pages/Data Engineering Services/DataEngineeringServices'))
import './index.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathRef = useRef(pathname)

  useEffect(() => {
    if (pathname.startsWith('/services/vision') || hash) return;
    if (pathname.startsWith('/industries') && prevPathRef.current.startsWith('/industries')) {
      prevPathRef.current = pathname;
      return;
    }
    prevPathRef.current = pathname;
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  useEffect(() => {
    const handleOpenTerms = () => setTermsOpen(true)
    const handleOpenPrivacy = () => setPrivacyOpen(true)
    window.addEventListener('open-terms', handleOpenTerms)
    window.addEventListener('open-privacy', handleOpenPrivacy)
    return () => {
      window.removeEventListener('open-terms', handleOpenTerms)
      window.removeEventListener('open-privacy', handleOpenPrivacy)
    }
  }, [])

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<main className="min-h-screen bg-[#0F172A]" aria-label="Loading page" />}>
      <Routes>
        <Route path="/" element={<Modern />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/modern-business" element={<Modern />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ai-solutions" element={<AiSolutions />} />
        <Route path="/ai-solutions-services" element={<AiSolutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-grid" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events" element={<Event />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/work" element={<Work />} />
        <Route path="/augmentation" element={<Augmentation />} />
        <Route path="/it-staff-augmentation" element={<Augmentation />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/feedops" element={<FeedOpsCaseStudy />} />
        <Route path="/case-study/hireramp" element={<HireRampCaseStudy />} />
        <Route path="/feedops" element={<FeedOpsCaseStudy />} />
        <Route path="/hireramp" element={<HireRampCaseStudy />} />
        <Route path="/case-study/pocketgeek" element={<PocketGeekCaseStudy />} />
        <Route path="/pocketgeek" element={<PocketGeekCaseStudy />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/ai-ml-technology" element={<AiMlTechnology />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:category" element={<Industries />} />
        <Route path="/healthcare" element={<Industries />} />
        <Route path="/finance" element={<Industries />} />
        <Route path="/education" element={<Industries />} />
        <Route path="/ecommerce" element={<Industries />} />
        <Route path="/logistics" element={<Industries />} />
        <Route path="/construction" element={<Industries />} />
        <Route path="/automotive" element={<Industries />} />
        <Route path="/insurance" element={<Industries />} />
        <Route path="/jmart24" element={<JMart24 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/vision" element={<Services />} />
        <Route path="/services/vision2" element={<Services />} />
        <Route path="/services/vision3" element={<Services />} />
        <Route path="/services/vision4" element={<Services />} />
        <Route path="/services/vision5" element={<Services />} />
        <Route path="/services/vision6" element={<Services />} />
        <Route path="/services/vision7" element={<Services />} />
        <Route path="/services/vision8" element={<Services />} />
        <Route path="/services/vision9" element={<Services />} />
        <Route path="/services/vision10" element={<Services />} />
        <Route path="/services/vision11" element={<Services />} />
        <Route path="/services/vision12" element={<Services />} />
        <Route path="/services/vision13" element={<Services />} />
        <Route path="/services/vision14" element={<Services />} />
        <Route path="/services/vision15" element={<Services />} />
        <Route path="/hire-developers" element={<Hire />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/schedule-consultation" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/open-roles" element={<OpenRoles />} />
        <Route path="/why-join" element={<WhyJoinUs2 />} />
        <Route path="/blockchain-technology" element={<BlockchainTechnology />} />
        <Route path="/mobile-app-development" element={<Mobile />} />
        <Route path="/devops-technology" element={<Devops />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/custom-software-development" element={<SoftwareDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-app-development-services" element={<MobileAppDevelopment />} />
        <Route path="/mobile-development" element={<MobileAppDevelopment />} />
        <Route path="/uiux-design" element={<UiUxDesign />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/devops-and-cloud" element={<DevopsAndCloud />} />
        <Route path="/custom-software" element={<CustomSoftware />} />
        <Route path="/third-party-integration" element={<ThirdPartyIntegration />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/qa-and-testing" element={<QaTesting />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/crm-customization" element={<CrmCustomization />} />
        <Route path="/seo-smo" element={<SeoSmo />} />
        <Route path="/it-staff-augmentation-services" element={<ItStaffAugmentation />} />
        <Route path="/data-engineering-services" element={<DataEngineeringServices />} />
      </Routes>
      </Suspense>
      <Footer onOpenTerms={() => setTermsOpen(true)} onOpenPrivacy={() => setPrivacyOpen(true)} />
      <GlobalContact />
      <CookieConsent onOpenPrivacy={() => setPrivacyOpen(true)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </BrowserRouter>
  )
}

export default App
